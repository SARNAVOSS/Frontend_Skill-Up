/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}',"./index.html"],
  theme: {
    extend: {
      backgroundColor:{
        'bg-primary':"#121418",
        "bg-primary-1":"#252a34",
        "btn-primary-1":"#01c29a",
        "btn-primary-2":"#e5cd71",
        "card-primary-1": "#24292e",
        "dim-primary-1": "#2b3036"
      }
    },
  },
  plugins: [
     require('tailwind-scrollbar'),
  ],
}
