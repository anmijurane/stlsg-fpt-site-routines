import fs from 'node:fs/promises';
import path from 'node:path';
import { defineMiddleware } from "astro:middleware";
import { UAParser } from "ua-parser-js";
import { locationsGym } from "./data/location_gym";
import { randomUUID } from 'node:crypto';
import type { LogEntry } from '@interfaces/LogEntry';
import axios from 'axios';

const isProd = import.meta.env.PROD;

const ASSET_EXTENSIONS = [
  '.js', '.css', '.json', '.png', '.jpg', '.jpeg', '.mp4', '.webm', '.mp3', '.wav',
  '.svg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.map', '.txt'
];

const LOGS_DIR = path.join(process.cwd(), '_logs');
const LOGS_FILE_PATH = () => {
  const current = new Date();
  const nameDate = `${current.getDate()}-${current.getMonth()}-${current.getUTCFullYear()}`;
  return path.join(LOGS_DIR, `access_log_${nameDate}.jsonl`);
}

const ensureLogDirectoryExist = async () => {
  try {
    await fs.mkdir(LOGS_DIR, { recursive: true });
    console.log('DIRLOGS', { LOGS_DIR }, 'LOCKED');
  } catch (error) {
    console.error('ensureLogDirectory ', error);
  }
}

// ensureLogDirectoryExist();

const locationsGymMap = new Map(
  locationsGym
    .filter(gym => gym.active)
    .map(gym => [gym.slug, gym])
);

const appendLog = async (log: string) => {
  try {
    await fs.appendFile(LOGS_FILE_PATH(), `${log}\n`, 'utf8');
  } catch (error) {
    console.log('Error a registry log', error);
  }
}

const saveLogInDataBaseWithAPI = async (body: LogEntry) => {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;
  const apiUser = process.env.API_USER;
  const apiPath = process.env.API_PATH;

  try {
    const response = await axios.post(
      `${apiUrl}${apiPath}`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': `${apiUser}${apiKey}`
        }
      }
    );
    console.log('Log saved in database:', response.data);
  } catch (error) {
    console.error('Error a registry log', error);
  }
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, clientAddress, request } = context;
  if (import.meta.env.MODE === 'development') {
    return next();
  }

  if (request.method === 'HEAD' || request.method === 'OPTIONS') return next();

  if (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.startsWith('/_image') ||
    ASSET_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
  ) return next();

  const slug = url.searchParams.get('slug');
  const alreadyCookieExist = cookies.get('slug')?.value;
  const sessionRef = cookies.get('_a')?.value || '00000000-0000-0000-0000-000000000000';

  if (alreadyCookieExist) {
    const parser = new UAParser();
    const uaInfo = parser.setUA(request.headers.get('user-agent') || '').getResult();

    const logEntry: LogEntry = {
      session_ref: sessionRef,
      club_id: alreadyCookieExist,
      client: {
        ip: clientAddress,
        browser: uaInfo.browser.toString() || 'unknown',
        os: uaInfo.os.toString() || 'unknown',
        device: uaInfo.device.toString() || 'unknown'
      },
      page: {
        path: url.pathname,
        query_string: url.search.replace('?', ''),
      }
    };
    saveLogInDataBaseWithAPI(logEntry);
    return next();
  }

  if (slug) {
    const isValidGym = locationsGymMap.get(slug);
    if (isValidGym) {
      const redirectUrl = `${url.origin}${url.pathname}`;
      const expiresDate = new Date(Date.now() + 1000 * 60 * 60 * 12); // 12 horas
      const sessionId = randomUUID();

      const cookieSlug = `${encodeURIComponent('slug')}=${encodeURIComponent(slug)}; Path=/; SameSite=Lax; HttpOnly; ${isProd ? 'Secure;' : ''} Expires=${expiresDate.toUTCString()};`;
      const cookieSession = `${encodeURIComponent('_a')}=${encodeURIComponent(sessionId)}; Path=/; SameSite=Lax; HttpOnly; ${isProd ? 'Secure;' : ''} Expires=${expiresDate.toUTCString()};`;
      const headers = new Headers();
      headers.append('Location', redirectUrl);
      headers.append('Set-Cookie', cookieSlug);
      headers.append('Set-Cookie', cookieSession);

      const response = new Response(null, {
        status: 302,
        headers: headers
      });
      return response;
    }
  }

  // Si no hay slug válido ni cookie, redirigimos.
  return Response.redirect('https://planetfitness.mx', 302);
});
