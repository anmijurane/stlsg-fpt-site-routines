// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import dotenv from 'dotenv';

import react from '@astrojs/react';

dotenv.config();

const PORT = Number(process.env.PORT) || 4321;

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  }),

  integrations: [react()],

  server: {
    port: PORT
  }
});
