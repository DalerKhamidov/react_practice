export default {
  content: ["./src/**/*.tsx", "./src/**/*.css"],
  plugins: [require("@tailwindcss/forms")],
  darkMode: 'selector',
  backgroundImage: {
    'video': "url('/src/components/context/bleachvidhd.mp4')", // Optional: if you want to set a background video
  },
  theme: {
    extend: {
      // Adding the new font here
      fontFamily: {
        'avestrava': ['Avestrava'],
      },
    },
  },
};
