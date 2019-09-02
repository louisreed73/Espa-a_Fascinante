const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const uglify=require('uglifyjs-webpack-plugin');
// const OptimizeCssAssets=require('optimize-css-assets-webpack-plugin');

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

module.exports = merge(common, {

    
    mode:"production",
    // devtool:'source-map',

    optimization:{
        splitChunks: {
            cacheGroups: {
                bundleStyles: {
                    name: 'bundle',
                    test: (m, c, entry = 'bundle') =>
                        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true,
                },
                contactStyles: {
                    name: 'formularioRegistroUsuario',
                    test: (m, c, entry = 'formularioRegistroUsuario') =>
                        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer:[
/*             new uglify(),
            new OptimizeCssAssets(), */
        ]
    },



})