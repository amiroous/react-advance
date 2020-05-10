const dotenv = require('dotenv').config().parsed;
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

let NextConfig = {
    env: {
        // Object destruction wouldn't work on process.env
        TECHS_API: dotenv.TECHS_API,
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        SECRET_KEY: dotenv.SECRET_KEY,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        PUBLIC_KEY: dotenv.PUBLIC_KEY,
    },
    // Customize page extensions
    pageExtensions: ['page.js', '_app.js'],
};

// Handle SSR CSS and SCSS Loaders
NextConfig = withCSS(withSass({
    ...NextConfig
}));

module.exports = NextConfig;