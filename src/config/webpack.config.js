const webpack = require('webpack');
const path = require('path');
const BUILD_DIRNAME = path.join(__dirname, '../../dist');
const APP_DIRNAME = path.join(__dirname, '..');

const config = {
    entry: APP_DIRNAME + '/index.js',
    output: {
        path: BUILD_DIRNAME,
        filename: './bundle.js'
    }
};

module.exports = config;