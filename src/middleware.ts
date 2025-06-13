import { defineMiddleware } from "astro:middleware";
import { locationsGym } from "./data/location_gym";
const isProd = import.meta.env.PROD;

const ASSET_EXTENSIONS = [
  '.js', '.css', '.json', '.png', '.jpg', '.jpeg',
  '.svg', '.gif', '.webp', '.ico', '.woff', '.woff2', '.map'
];

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, clientAddress } = context;
  console.log({ clientAddress });
  // --- FILTRO DE ASSETS ---
  // Si es un asset, no ejecutamos nada de la lógica de abajo.
  if (
    url.pathname.startsWith('/_astro/') ||
    ASSET_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
  ) {
    return next();
  }

  const slug = url.searchParams.get('slug');
  const alreadyCookieExist = cookies.get('slug')?.value;
  console.log('_____________');
  console.log({ slug, alreadyCookieExist });
  // 1. Validamos si viene un slug en la URL
  if (slug) {
    const isValidGym = locationsGym.find(gym => gym.slug === slug && gym.active);
    console.log('Acceso por:', { gym: isValidGym?.club });
    if (isValidGym) {
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

  // 2. Si no hubo slug en la URL, ¿existe ya una cookie?
  if (alreadyCookieExist) {
    return next();
  }

  // 3. Si no hay slug válido ni cookie, redirigimos.
  return Response.redirect('https://planetfitness.mx', 301);
});
