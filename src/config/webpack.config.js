const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const BUILD_DIRNAME = path.join(__dirname, '../../dist');
const APP_DIRNAME = path.join(__dirname, '..');
const VENDOR_LIBS = [ 'react', 'react-dom'];
const PORT = 3000;

const babelLoader = {
    test: /\.(js|jsx)/,
    include: APP_DIRNAME,
    use: 'babel-loader'
};

const cssLoader = {
    test: /\.css/,
    use: [ 'style-loader', 'css-loader']
};

const scssLoader = {
    test: /\.scss/,
    use: [ 'style-loader', 'css-loader', 'sass-loader']
};

const fileLoader = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: 'file-loader'
};

const config = {
    entry: {
        bundle: APP_DIRNAME + '/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: BUILD_DIRNAME,
        filename: './[name].[chunkhash].js'
    },
    module: {
        rules: [
            babelLoader,
            cssLoader,
            scssLoader,
            fileLoader
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/public/index.html'
        }),
        // new webpack.optimize.splitChunks({
        //     names: [ 'vendor', 'manifest']
        // })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    devServer: {
        contentBase: BUILD_DIRNAME,
        compress: true,
        port: PORT
    }
};

module.exports = config;