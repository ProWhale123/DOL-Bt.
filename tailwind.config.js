/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Az 'Inter' lesz az alapértelmezett 'sans-serif' betűtípus.
        sans: ['Inter', 'sans-serif'],
        // Létrehozunk egy 'display' családot a 'Poppins'-szal a címeknek.
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}