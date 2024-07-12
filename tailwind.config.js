/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgpri: 'rgb(var(--color-bgpri) / <alpha-value>)',
        txtpri: 'rgb(var(--color-txtpri) / <alpha-value>)',
        sec: {
          1: 'rgb(var(--color-sec1) / <alpha-value>)',
          2: 'rgb(var(--color-sec2) / <alpha-value>)',
        },
        accent: {
          1: 'rgb(var(--color-accent1) / <alpha-value>)',
          2: 'rgb(var(--color-accent2) / <alpha-value>)',
          3: 'rgb(var(--color-accent3) / <alpha-value>)',
        },
      },

      fontFamily: {
        poppin: ['Poppins'],
      },

      shadow: {
        'fine': '2px 4px 10px 0',
      },

      keyframes: {
        slider: {
          'from':{transform: "translateX(0)"},
          'to':{transform: "translateX(calc(-50% - 1rem))"},

        }
      },

      animation: {
        slider: 'slider 100s infinite linear',

      },


    },
  },
  plugins: [],
  darkMode: "class",
}

