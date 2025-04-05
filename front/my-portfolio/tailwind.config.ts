// tailwind.config.ts
import type { Config,  } from "tailwindcss";
import plugin from "tailwindcss/plugin";


const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      fontFamily: {
        klee: ["var(--font-klee-one)", "sans-serif"],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(195, 238, 255, 0.5)',
        DEFAULT: '2px 2px 4px rgba(122, 213, 255, 0.6)',
        lg: '30px 30px 60px rgba(86, 207, 255, 0.7)',
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities  }) {
      addUtilities({
        '.text-shadow-blue': {
          textShadow: '0px 0px 24px rgba(122, 213, 255, 0.6)',
        },
      })
    }),
  ],
};

export default config;
