/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
        poppinsBold: "poppinsBold",
        poppinsSemiBold: "poppinsSemiBold",
        poppinsMedium: "poppinsMedium",
      },
      colors: {
        "coral-red": "#FF3D42",
        "coral": "#FF9052",
        "seashell": "#F1F1F1",
        "bondi-blue": "#0097B3",
        "aztec": "#181818"
      },
      screens: {
        oldMobile: { raw: "(max-width: 360px)" },
        mobile: { raw: "(max-width: 520px)" },
        tablet: { raw: "(min-width: 620px) and (max-width: 834px)" },
      },
    },
  },
  plugins: [],
};
