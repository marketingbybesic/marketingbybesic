/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#111111',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A3A3A3',
        },
        brand: {
          DEFAULT: '#8224e3',
          hover: '#6e1dc4',
          glow: 'rgba(130, 36, 227, 0.4)',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Geist', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
