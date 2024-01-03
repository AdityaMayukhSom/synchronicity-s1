/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/***/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        custom_blue: {
          50: "#EBEEFA",
          100: "#C2CCEF",
          200: "#9AAAE4",
          300: "#7289DA",
          400: "#4967CF",
          500: "#304DB6",
          600: "#253C8D",
          700: "#1B2B65",
          800: "#101a3d",
          900: "#050914",
        },
        crystal: {
          50: "#F4F9FB",
          100: "#EDF5F8",
          200: "#DBECF0",
          300: "#C5E0E7",
          400: "#B3D7E0",
          500: "#A1CDD8",
          600: "#6BB0C2",
          700: "#428C9F",
          800: "#2D606C",
          900: "#163036",
        },
        orchid: {
          50: "#FBF4F9",
          100: "#F8EDF5",
          200: "#F0DBEC",
          300: "#E7C5E0",
          400: "#E0B3D7",
          500: "#D8A1CD",
          600: "#C26BB0",
          700: "#9F428C",
          800: "#6C2D60",
          900: "#361630",
        },
        springbud: {
          50: "#F9FBF4",
          100: "#F5F8ED",
          200: "#ECF0DB",
          300: "#E0E7C5",
          400: "#D7E0B3",
          500: "#CDD8A1",
          600: "#B0C26B",
          700: "#8C9F42",
          800: "#606C2D",
          900: "#303616",
        },
      },
      fontSize: {
        '4.5xl': '42px'
      }
    },
  },
  plugins: [],
};
