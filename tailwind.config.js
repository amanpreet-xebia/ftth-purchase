/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      backgroundImage: {
        'left-pattern': "url('/images/left-pattern.png')",
        'right-pattern': "url('/images/right-pattern.png')",
        'blue-lines-bg': "url('/images/blueCard.svg')",
      },
      colors: {
        'salam-blue': '#081F33',
        'base-grey': '#F5F8FB',
        'bright-green': '#00B140',
        'salamgreen': "#00AE42",
        'accent': "#00AE42",
        'aqua-green': '#D9FFE9',
        'light-red': '#FFEFEF',
        'light-green': 'rgba(26, 176, 70, 0.2)',
        //'primary': '#01B140',
        'primary-light': '#c4e9d6',
        'roman-silver': '#80909A',
        'black-rgba': 'rgba(0, 0, 0, 0.35)',
        'salam-background': '#E5E5E5',
      },
      screens: {
        xs: '220px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        interBold: ['Inter-Bold', 'sans-serif'],
        interSemiBold: ['Inter-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
   daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#002035",

          secondary: "#80909A",

          accent: "#00AE42",

          neutral: "#242032",

          "base-100": "#F8F8F8",

          info: "#80AEE0",

          success: "#156537",

          warning: "#F8A654",

          error: "#EB3F28"
        }
      }
    ]
  }
  
};
