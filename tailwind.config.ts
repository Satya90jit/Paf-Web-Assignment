import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#D24115",
        // secondary: "#FFFFFF",
        instagram: "#bc2a8d",
        twitter: "#1da1f2",
        linkedin: "#0077b5",
        pinterest: "#E60023",
        whatsapp: "#25d366",
        youtube: "#cd201f",
        facebook: "#3b5998",
      },
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      //   "3xl": "1720px",
      //   "4xl": "2000px",
      // },
    },
  },
  plugins: [],
};
export default config;
