// caching - https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31

'use strict';

let Path = require('path');
let Webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin')

let internals = {};

internals.srcDir = Path.join(__dirname, 'client-app/src');
internals.buildDir = Path.join(__dirname, 'client-app/dist');

function getConfig(isProduction) {

    let outputFormat = isProduction ? '[name].[chunkhash:4]' : '[name]';

    let config = {

        entry: {
            'app': [
                Path.join(internals.srcDir, 'index'),
                Path.join(internals.srcDir, 'require-styles-app.js')
            ],
            'lib': [
                'underscore',
                Path.join(internals.srcDir, 'require-styles-lib.js'),
                'date-fns',
            ]
        },

        output: {
            path: internals.buildDir,
            filename: outputFormat + '.js',
            chunkFilename: outputFormat + '.js'
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
            new CleanWebpackPlugin(internals.buildDir),
            new Webpack.NamedChunksPlugin(), 
            isProduction ? new Webpack.HashedModuleIdsPlugin() : new Webpack.NamedModulesPlugin(),
            
            
            new Webpack.optimize.CommonsChunkPlugin({
                name: 'lib',  // should be same as the key in the 'entry' section
                minChunks: Infinity
            }),
            new Webpack.optimize.CommonsChunkPlugin({
               name: 'runtime'
            }),

            new BellOnBundlerErrorPlugin,
            new ExtractTextPlugin(outputFormat + '.css' /*, { allChunks: true }*/),
        ],

    };

    return config

}

//module.exports = config;
module.exports = function (env = {}) {

  return getConfig(env.production);
}
