'use strict';

let Path = require('path');
let Webpack = require('webpack');
let BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');

let internals = {};

internals.srcDir = Path.join(__dirname, 'src');
internals.buildDir = Path.join(__dirname, 'dist');

let config = {

    entry: {
        'app': [
            Path.join(internals.srcDir, "index"),
        ],
        'lib': [
            'underscore',
        ]
    },

    output: {
        path: internals.buildDir,
        filename: '[name].js',
    },
 
    plugins: [
        new Webpack.optimize.CommonsChunkPlugin({
            name: ['lib'],  // should be same as the key in the "entry" section
            minChunks: Infinity
        }),
        new BellOnBundlerErrorPlugin,
    ],

};


module.exports = config;
