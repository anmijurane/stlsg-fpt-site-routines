import { defineMiddleware } from "astro:middleware";
import { locationsGym } from "./data/location_gym";
import fs from 'node:fs/promises';
import path from 'node:path';
import { UAParser } from "ua-parser-js";

const isProd = import.meta.env.PROD;

const ASSET_EXTENSIONS = [
  '.js', '.css', '.json', '.png', '.jpg', '.jpeg',
  '.svg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.map'
];

const LOGS_DIR = path.join(process.cwd(), '_logs');
const LOGS_FILE_PATH = path.join(LOGS_DIR, 'access_log.jsonl');

const ensureLogDirectoryExist = async () => {
  try {
    await fs.mkdir(LOGS_DIR, { recursive: true });
    console.log('DIRLOGS', { LOGS_DIR }, 'LOCKED');
  } catch (error) {
    console.error('ensureLogDirectory ', error);
  }
}

ensureLogDirectoryExist();

const locationsGymMap = new Map(
  locationsGym
    .filter(gym => gym.active)
    .map(gym => [gym.slug, gym])
);

const appendLog = async (log: string) => {
  try {
    console.log(log);
    //await fs.appendFile(LOGS_FILE_PATH, `${log},\n`, 'utf8');
  } catch (error) {
    console.log('Error a registry log', error);
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, clientAddress, request } = context;
  if (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.startsWith('/_image') ||
    ASSET_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
  ) {
    return next();
  }

  const slug = url.searchParams.get('slug');
  const alreadyCookieExist = cookies.get('slug')?.value;
  const skip = url.searchParams.get('skip');

  const parse = new UAParser();
  const userAgent = parse.setUA(request.headers.get('user-agent') || '').getResult();
  const logEntry = {
    club_name: '',
    timestamp: new Date().toISOString(),
    slug: slug || alreadyCookieExist,
    withCookie: !!alreadyCookieExist,
    client_ip: clientAddress,
    user_agent_browser: userAgent.browser.toString() || 'unknow',
    user_agent_os: userAgent.os.toString() || 'unknow',
    user_agent_device: userAgent.device.toString() || 'unknow',
    skip: !!skip,
    page: url.pathname,
  };

  if (slug) {
    const isValidGym = locationsGymMap.get(slug);
    if (isValidGym) {
      cookies.set('slug', slug, {
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: isProd,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 12),
      });
      logEntry.club_name = isValidGym.club;

      appendLog(JSON.stringify(logEntry));
      // const urlWithoutParam = new URL(url.toString());
      // urlWithoutParam.searchParams.delete('slug');

      // return Response.redirect(urlWithoutParam.toString(), 302);
      return next('/');
    }
  }

  if (alreadyCookieExist) {
    const gym = locationsGymMap.get(alreadyCookieExist);
    logEntry.club_name = gym?.club || alreadyCookieExist;
    appendLog(JSON.stringify(logEntry));
    return next();
  }

  // Si no hay slug válido ni cookie, redirigimos.
  return Response.redirect('https://planetfitness.mx', 301);
});
