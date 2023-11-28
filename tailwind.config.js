/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
    },
    colors: {
      primary: "#fb5607",
      slate: "#e9ecef",
      white: "#ffffff",
      black: "#343a40",
    },
    extend: {},
  },
  plugins: [],
});
