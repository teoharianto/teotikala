
require("dotenv").config();  
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withImages(withFonts(withSass(withCss())));


// const withCSS = require("@zeit/next-css");  
// const withFonts = require("next-fonts");

// module.exports = withCSS({  
//   env: {
//     API_URL: process.env.API_URL
//   }
// });
