'use strict';

let Path = require('path');
let Webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

let internals = {};

internals.srcDir = Path.join(__dirname, 'client-app/src');
internals.buildDir = Path.join(__dirname, 'client-app/dist');

let config = {

    entry: {
        'app': [
            Path.join(internals.srcDir, 'index'),
            Path.join(internals.srcDir, 'require-styles-app.js')
        ],
        'lib': [
            'underscore',
            Path.join(internals.srcDir, 'require-styles-lib.js')
        ]
    },

    output: {
        path: internals.buildDir,
        filename: '[name].js',
    },
 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: 'css-loader'
                })
            },
        ]
    },

    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: ['lib'],  // should be same as the key in the 'entry' section
            minChunks: Infinity
        }),
        new BellOnBundlerErrorPlugin,
        new ExtractTextPlugin('[name].css' /*, { allChunks: true }*/)
    ],

};

module.exports = config;
