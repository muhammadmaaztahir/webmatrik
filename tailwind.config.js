/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      boxShadow: {
        xl:  "0 30px 80px 1px rgb(0 0 0 / 0.1), 0 8px 10px 1px rgb(0 0 0 / 0.1);",
        md:  "0 30px 80px 3px rgb(0 0 0 / 0.1), 0 8px 20px 4px rgb(0 0 0 / 0.1);"
      }
    },
  },
  plugins: [],
}

