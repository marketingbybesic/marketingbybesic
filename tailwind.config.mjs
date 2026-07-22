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
          // Raised from #A3A3A3. Body copy on a near-black background was
          // hard to read on lower-quality displays, and this is the colour
          // every card description and paragraph uses. #C9C9D1 is the value
          // from the brand palette and lifts contrast to roughly 11:1.
          secondary: '#C9C9D1',
          muted: '#8A8A94',
        },
        brand: {
          DEFAULT: '#8224e3',
          hover: '#6e1dc4',
          glow: 'rgba(130, 36, 227, 0.4)',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Geist', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
