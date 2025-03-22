/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing : {
        '72' : '18rem',
      },
      colors : {
        teal : {
          100 : "#E6FFFA"
        }
      }
    },
  },
  plugins: [],
};
