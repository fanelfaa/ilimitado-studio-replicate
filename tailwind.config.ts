import { addIconSelectors } from '@iconify/tailwind'
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f5cb5c"
      },
      fontFamily: {
        sinisuka: "var(--font-sinisuka)",
      },
      container:{
        center: true,
      },
      keyframes:{
        'scroll-left': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation:{
        'scroll-left': 'scroll-left linear infinite',
      },
      screens:{
        xl: '1200px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [
    addIconSelectors({
      prefixes: ['ion']
    })
  ],
};
export default config;
