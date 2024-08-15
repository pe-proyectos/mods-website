module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#100F0F',
        secundary: '#171212',
        text_primary: '#CBC9C9',
        shadow: '#312F2F',
        btn_primary: '#18A094',
        text_greenBlue: '#1DB88E',
        text_green: '#1EB854',
        text_blue: '#1DB8AB',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
