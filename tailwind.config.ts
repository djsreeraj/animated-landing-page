import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '455px',  
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        darkgray: '#0c0c0c', 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'], 
        caps: ['var(--font-six-caps)', 'cursive'],
      },
      // Extend the utilities for scrollbar styling
      utilities: {
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', // IE 10+
          'scrollbar-width': 'none',    // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',            // WebKit-based browsers
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
