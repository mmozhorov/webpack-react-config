const webpack = require('webpack');
const path = require('path');
const BUILD_DIRNAME = path.join(__dirname, '../../dist');
const APP_DIRNAME = path.join(__dirname, '..');
const JSAndJSXApplicationRule = {
    test: /\.(js|jsx)/,
    include: APP_DIRNAME,
    use: 'babel-loader'
};

const config = {
    entry: APP_DIRNAME + '/index.js',
    output: {
        path: BUILD_DIRNAME,
        filename: './bundle.js'
    },
    module: {
        rules: [
            JSAndJSXApplicationRule
        ]
    }
};

module.exports = config;