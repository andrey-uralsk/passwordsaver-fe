var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'index': './src/main.ts',
        'app': './src/app/app.module.ts',
        'core': './src/core/core.module.ts',
        libs: [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js',
            '@angular/core',
            '@angular/common',
            '@angular/forms',
            '@angular/http',
            '@angular/router'
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader : 'awesome-typescript-loader',
                        options: { configFileName: helpers.root('tsconfig.json') }
                    } , 'angular2-template-loader', 'angular-router-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=static/[name].[hash].[ext]'
            },
            {
                test: /\.styl$/,
                use: [
                    'raw-loader', 'stylus-loader'
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)/,
            helpers.root('src'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills', 'index', 'core', 'libs']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};