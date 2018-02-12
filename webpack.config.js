const webpack = require('webpack');

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }

}

//para gerar packages.json com react, es2015, presets e webpack:
//npm i --save-dev react@15.4.2 react-dom@15.4.2 babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0 babel-preset-react@6.22.0 webpack@1.14.0 webpack-dev-server@1.16.2