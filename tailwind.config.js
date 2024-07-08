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
          2: 'rgb(var(--color-sec2) / <alpha-value>)'
        },
        accent: {
          1: 'rgb(var(--color-accent1) / <alpha-value>)',
          2: 'rgb(var(--color-accent2) / <alpha-value>)',
          3: 'rgb(var(--color-accent3) / <alpha-value>)'
        },
      },
      keyframes: {
        bganimate: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },

      animation: {
        "spin-slower": "spin 45s ease infinite",
        "spin-slow": "spin 35s ease-in-out infinite reverse",

        bganimate: 'bganimate 10s ease infinite'
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

