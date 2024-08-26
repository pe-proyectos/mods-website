export default {
  content: ["./src/**/*.{astro,html,js,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#100F0F",
        secundary: "#171212",
        text_primary: "#CBC9C9",
        shadow: "#312F2F",
        btn_primary: "#18A094",
        text_greenBlue: "#1DB88E",
        text_green: "#1EB854",
        text_blue: "#1DB8AB",
        success: "#1EB854",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "--success": "100% 0.2 295",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "--success": "100% 0.2 289",
        },
      },
    ],
  },
};
