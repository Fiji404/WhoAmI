/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
          fontFamily: {
            'sans': 'Open Sans, sans-serif',
            'heading': "Merriweather, sans-serif"
          }
        },
    },
    plugins: [],
};
