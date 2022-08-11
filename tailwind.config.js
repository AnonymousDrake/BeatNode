module.exports = {
  mode: 'jit', // enabling JIT In Time Compiler engine
  content: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      dropShadow: {
        '3xl': '0 0 20px rgba(255, 177, 81, 0.77)',
      },
      colors: {
        appBg: '#212121',
        white: 'white',
        border: '#595959',
        orange: 'rgba(255, 123, 95, 1)',
        golden: '#BB895F',
        wine: '#79004C',
        greyish: '#1F1D2B',
        gradient1: 'rgba(144, 94, 30, 1)',
        gradient2: 'rgba(106, 38, 40, 1)',
        gradient3: 'rgba(61, 15, 54, 1)',
        vGradient1: 'black',
        vGradient2: 'rgba(0, 0, 0, 0.65)',
        vGradient3: 'transparent',
        lightOrange: 'rgba(69, 33, 41, 0.5)',
        translucentOrange: 'rgba(255, 123, 95, 0.5)',
        veryLightOrange: 'rgba(255, 123, 95, 0.2)',
        searchBg: 'rgba(255, 255, 255, 0.07)',
      },
    },
    screens: {
      sm: '550px',
      // sm: "550px",
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
