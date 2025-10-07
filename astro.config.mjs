import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // <- Fontos, hogy ez legyen itt

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(), // Itt nem is feltétlenül kell a config elérési út, mert a Vite plugin okos és megtalálja
    ],
  },
});