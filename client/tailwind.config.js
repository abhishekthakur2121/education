

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Important!
  ],
  theme: {
    extend: {
      fontSize : {
        'course-details-heading-small':['20px', '30px'],
        'course-details-heading-large':['30px', '40px'],
        'home-heading-small':['24px', '30px'],
        'home-heading-large':['44px', '50px'],
        'default':['15px', '24px']

      }
    },
  },
  plugins: [],
}