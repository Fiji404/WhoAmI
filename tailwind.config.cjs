/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Open Sans, sans-serif',
                heading: 'Merriweather, sans-serif',
                consolas: 'Inconsolata, monospace'
            },
            colors: {
                primary: '#111',
                secondary: '#151515',
                accent: '#151515'
            },
        },
    },
    plugins: [],
};
