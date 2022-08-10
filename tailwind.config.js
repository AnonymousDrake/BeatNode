module.exports = {
  mode: 'jit', // enabling JIT In Time Compiler engine
  content: ['./components/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        appBg: '#212121',
        white: 'white',
        border: '#595959',
        orange: '#FF7B5F',
        golden: '#BB895F',
        wine: '#79004C',
        greyish: '#1F1D2B',
        gradient1: 'rgba(144, 94, 30, 1)',
        gradient2: 'rgba(106, 38, 40, 1)',
        gradient3: 'rgba(61, 15, 54, 1)',
        vGradient1: 'black',
        vGradient2: 'rgba(0, 0, 0, 0.65)',
        vGradient3: 'transparent',
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
