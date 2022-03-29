module.exports = {
  content:
    ["./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    fontFamily: {
      'sans': ['Alatsi', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
