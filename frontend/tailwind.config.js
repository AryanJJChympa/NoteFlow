import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libertinus Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui:{
    themes: ["sunset","coffee"],
  }
}