import { defineMiddleware } from "astro:middleware";
import { locationsGym } from "./data/location_gym";

export const onRequest = defineMiddleware( async (context, next) => {
  const { url } = context;

  const slug = url.searchParams.get('slug');
  
  const isValidGym = locationsGym.find(gym => gym.slug === slug && gym.active);

  if (url.pathname === '/' && slug === null && !isValidGym) {
    console.log('VALID!!')
    // return Response.redirect('https://planetfitness.mx', 301);
  }

  return next();

});
