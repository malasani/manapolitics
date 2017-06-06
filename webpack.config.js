'use strict';

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{

            test: /\.tsx?$/,
            use: ["babel-loader", "ts-loader"]
        },
        {

            test: /\.css|.scss|.sass$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        },
        {
            enforce: 'pre',
            test: /\.js$/,
            use: 'source-map-loader'
        }

        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        inline: true,
        port: process.env.port || 5000
    },
    devtool: 'source-map',
    plugins: [

        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: 'Mana Politics',
            filename:"index.html",
            template: './src/index.html'
        })
    ]
};
