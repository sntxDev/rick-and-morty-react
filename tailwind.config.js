/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ['"Rubik"'],
    },
    boxShadow: {
      // s: "0px 0px 15px -2px rgba(255, 255, 255, .8)",
      // hoverS: "0px 0px 15px 0px rgba(0, 255, 255, 1)",
      sSearch: "0px 0px 15px -2px rgba(0, 181, 204, 1)",
    },
  },
  plugins: [],
};
