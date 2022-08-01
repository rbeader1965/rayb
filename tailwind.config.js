module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "540px",
      md: "640px",
    },
    extend: {
      fontFamily: {
        'barlow': 'Barlow Condensed',
        'roboto': 'Roboto',
        'noto': 'Noto Sans Display'
      },
    },
  },
  plugins: [],
}
