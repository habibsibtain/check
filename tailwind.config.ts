
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'robot-background':"url('https://res.cloudinary.com/dgtdkqfsx/image/upload/v1734464638/MacBook_Pro_16__-_3_zzvpyj.png')",
        'custom-gradient': 'linear-gradient(180deg, rgba(217, 217, 217, 0.10) 18.66%, rgba(238, 99, 99, 0.10) 51.26%, rgba(255, 0, 0, 0.10) 78.47%)',
      },
      fontFamily:{
        bunken: ["Bunken Tech Sans SC Wide"],
        bunk: ["Bunken", "sans-serif"],
        Urbanist: ["var(--font-urbanist)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        29: '29px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
