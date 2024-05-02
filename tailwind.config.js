/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    backgroundImage: {
      'bg-db-lol': "url('../src/assets/images/lol_bg.jpg')",
      'bg-db-lol2': "url('../src/assets/images/lol_bg2.jpg')",
      'bg-videoShot': "url('../src/assets/images/videoShotImg.jpg')",

    },

    extend: {
      screens: {
        'sm_laptop': '992px',
        'laptop': '1360px',
      },
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
}

