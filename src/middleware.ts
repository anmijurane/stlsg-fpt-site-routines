import { defineMiddleware } from "astro:middleware";
import { locationsGym } from "./data/location_gym";

const isProd = import.meta.env.PROD;

const ASSET_EXTENSIONS = [
  '.js', '.css', '.json', '.png', '.jpg', '.jpeg',
  '.svg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.map'
];

const locationsGymMap = new Map(
  locationsGym
    .filter(gym => gym.active)
    .map(gym => [gym.slug, gym])
);

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, clientAddress } = context;
  console.log('IP :: Client :: ', clientAddress);
  if (
    url.pathname.startsWith('/_astro/') ||
    url.pathname.startsWith('/_image') ||
    ASSET_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
  ) {
    return next();
  }

  const slug = url.searchParams.get('slug');
  const alreadyCookieExist = cookies.get('slug')?.value;

  if (slug) {
    const isValidGym = locationsGymMap.get(slug);
    if (isValidGym) {
      console.log('Acceso primera vez por:', { gym: isValidGym?.club });
      cookies.set('slug', slug, {
        path: '/',
        sameSite: 'lax',
        httpOnly: true,
        secure: isProd,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 12),
      });

      return next('/');
    }
  }

  if (alreadyCookieExist) {
    console.log('Ya hay cookie, se acceso con:', alreadyCookieExist);
    return next();
  }

  console.log('Se quiso acceder, se redirige...')
  // Si no hay slug válido ni cookie, redirigimos.
  return Response.redirect('https://planetfitness.mx', 301);
});
