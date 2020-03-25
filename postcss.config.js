// const tailwindcss = require('tailwindcss');
// const purgecss = require('@fullhuman/postcss-purgecss');

// module.exports = {
//     plugins: [
//         tailwindcss('./tailwind.js'),
//         process.env.NODE_ENV === 'production' &&
//         purgecss({
//             content: ['./src/**/*.jsx'],
//             css: ['./src/**/*.css']
//         })
//     ]
// };

const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx'
        // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    plugins: [require('tailwindcss'), require('autoprefixer'), ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])]
};