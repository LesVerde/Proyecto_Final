/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            fontFamily: {
                roboto: 'Roboto Slab',
                barlow: 'Barlow Condensed'
            },
            textColor: {
                grisobsc: '#292929'
            }
        }
    },
    plugins: [],
}