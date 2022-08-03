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
        darkBlue: 'rgb(16, 23, 41)',
        white: 'white',
        orange: '#FF7B5F',
        golden: '#BB895F',
        wine: '#79004C',
        greyish: '#1F1D2B',
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
