const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
        'serif': ['"Noto Serif"', ...defaultTheme.fontFamily.serif],
       },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
