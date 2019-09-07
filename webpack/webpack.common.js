const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");


module.exports = {
    entry: {
        "bundle": './src/assets/js/index.js',
        "formularioRegistroUsuario": './src/assets/js/formularioRegistroUsuario.js',
        "registro": './src/assets/js/registro.js',
        "entradaUsuarios": './src/assets/js/entradaUsuarios.js',

/*         "entradaUsuario2": './src/assets/js/entradaUsuario2.js',
        "entradaUsuario3": './src/assets/js/entradaUsuario3.js', */
    },
    output: {
        path: path.resolve(__dirname, '../Espana_Fascinante_Luis_Sanchez_Alcazar'),
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
        new HtmlWebpackPlugin({
            filename: "loginPage/loginPage.html",
            template: "./src/loginPage/loginPage.html",
            // inject:true,
            chunks: ["registro"]
        }),
        new HtmlWebpackPlugin({
            filename: "entradaUsuarios/entradaUsuario1.html",
            template: "./src/entradaUsuarios/entradaUsuario1.html",
            // inject:true,
            chunks: ["entradaUsuarios"]
        }),
        new HtmlWebpackPlugin({
            filename: "entradaUsuarios/entradaUsuario2.html",
            template: "./src/entradaUsuarios/entradaUsuario2.html",
            // inject:true,
            chunks: ["entradaUsuarios"]
        }),
        new HtmlWebpackPlugin({
            filename: "entradaUsuarios/entradaUsuario3.html",
            template: "./src/entradaUsuarios/entradaUsuario3.html",
            // inject:true,
            chunks: ["entradaUsuarios"]
        }),

        new webpack.ProvidePlugin({$: 'jquery'}),

        new MiniCssExtractPlugin({filename: "assets/css/[name].css"})

    ]
}
