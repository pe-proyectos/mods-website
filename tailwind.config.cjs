module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#100F0F',
        secundary: '#171212',
        text_primary: '#CBC9C9',
        shadow: '#312F2F',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
