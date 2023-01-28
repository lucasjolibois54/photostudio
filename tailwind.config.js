/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxsm': '355px',
      // => @media (min-width: 355px) { ... }

      'xsm': '375px',
      // => @media (min-width: 375px) { ... }

      'semixsm': '408px',
      // => @media (min-width: 408px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md-blog-img': '791px',
      // => @media (min-width: 791px) { ... }

      'lg-blog-img': '839px',
      // => @media (min-width: 839px) { ... }

      'md-lg': '878px',
      // => @media (min-width: 878px) { ... }

      'md-lg-bigger': '915px',
      // => @media (min-width: 915px) { ... }

      'sm-lg': '696px',
      // => @media (min-width: 696px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'biggerlg': '1039px',
      // => @media (min-width: 1039px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        // colors
        'nav-bg': '#17161D',
        'nav-text': '#F3F5FB',
        'sidebar-bg': '#262730',
        'main-bg': '#1A1C22',
        'neon-green': '#9EE22E',
      }
    },
  },
  plugins: [],
}