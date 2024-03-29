module.exports = {
    content: ['./src/**/*.tsx'],
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
                accent: '#292929'
            }
        },
        screens: {
            smMax: { max: '530px' },
            smMin: { min: '530px' },
            md: { max: '1110px' }
        }
    },
    plugins: []
};
