const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");


module.exports = {
    entry: {
        "bundle": './src/assets/js/index.js',
        "formularioRegistroUsuario": './src/assets/js/formularioRegistroUsuario.js'
    },
    output: {
        filename: "assets/js/[name].js",
        chunkFilename: "assets/js/[name]-shared.js"
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.(svg|gif|png|jpe?g)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src',
                    publicPath: "../"
                }
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/env", {
                                    targets: {
                                        edge: "17",
                                        firefox: "60",
                                        chrome: "67",
                                        safari: "11.1",
                                        "ie": "9",
                                        "ie": "10",
                                        "ie": "11"
                                    },

                                    useBuiltIns: "usage"
                                }
                            ]
                        ],
                        plugins: [
                            [
                                '@babel/plugin-proposal-pipeline-operator', {
                                    proposal: "minimal"
                                }
                            ]
                        ]
                    }
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
             template: "./src/index.html",
            // inject:true,
            chunks: ["bundle"]
        }),
        new HtmlWebpackPlugin({
            filename: "formularioRegistroUsuario/formularioRegistroUsuario.html",
            template: "./src/formularioRegistroUsuario/formularioRegistroUsuario.html",
            // inject:true,
            chunks: ["formularioRegistroUsuario"]
        }),
/*         new HtmlWebpackPlugin({
            filename: "formularioRegistroUsuario.html",
            template: "./src/formularioRegistroUsuario.html",
            // inject:true,
            chunks: ["formularioRegistroUsuario"]
        }), */
        new webpack.ProvidePlugin({$: 'jquery'}),

        new MiniCssExtractPlugin({filename: "assets/css/[name].css"})

    ]
}
