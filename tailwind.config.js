/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-desktop": { max: "1536px" },
        "max-laptop": { max: "1280px" },
        "max-laptop-sm": { max: "1024px" },
        "max-tablet": { max: "768px" },
        "max-mobile": { max: "640px" },
        "max-small-mobile": { max: "375px" },
        "max-tiny": { max: "299px" },
      },
    },
  },
  plugins: [],
};
