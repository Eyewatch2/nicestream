import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          '50': '#f2f9fd',
          '100': '#e3f2fb',
          '200': '#c1e6f6',
          '300': '#8bd2ee',
          '400': '#4dbbe3',
          '500': '#25a0cd',
          '600': '#1784b2',
          '700': '#146990',
          '800': '#155977',
          '900': '#174a63',
          '950': '#0f3042',
        },
      }
    },
  },
  plugins: [],
};
export default config;
