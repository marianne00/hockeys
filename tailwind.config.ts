import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FF4240'
        },
        black: {
          300: '#131318',
          400: '#424247',
          600: '#131318',
          900: '#000000'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
