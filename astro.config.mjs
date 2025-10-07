import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss({
        // Explicit config path to help with resolution
        config: './tailwind.config.mjs'
      }),
    ],
  },
});