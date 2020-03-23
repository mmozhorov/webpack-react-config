const webpack = require('webpack');
const path = require('path');
const BUILD_DIRNAME = path.join(__dirname, '../../dist');
const APP_DIRNAME = path.join(__dirname, '..');

const babelLoader = {
    test: /\.(js|jsx)/,
    include: APP_DIRNAME,
    use: 'babel-loader'
};

const cssLoader = {
    test: /\.css/,
    use: [ 'style-loader', 'css-loader']
};

const imageLoader = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: 'file-loader'
};

const config = {
    entry: APP_DIRNAME + '/index.js',
    output: {
        path: BUILD_DIRNAME,
        filename: './bundle.js'
    },
    module: {
        rules: [
            babelLoader,
            cssLoader,
            imageLoader
        ]
    }
};

module.exports = config;