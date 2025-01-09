/* eslint-disable sort-keys */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}', // Include files in the app directory
    './app/[lang]/**/*.{js,jsx,ts,tsx}' // Include files in the [lang] directory
  ],
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Myanmar Text', 'sans-serif'],
        'myanmar': ['Myanmar Text', 'sans-serif'],
        'balham': ['Balham', 'sans-serif']
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards',
        "fade-in": "fadeIn 0.25s ease-in forwards",
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' }, /* Start off-screen */
          '100%': { transform: 'translateX(0)' }, /* End in place */
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            ul: {
              marginLeft: '1.5rem',
              listStyleType: 'disc',
            },
            ol: {
              marginLeft: '1.5rem',
              listStyleType: 'decimal',
            },
            li: {
              marginBottom: '0.5rem',
            },
          },
        },
      },
    }
  }
}