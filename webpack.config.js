const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: [ 
        'babel-polyfill',
       path.resolve(__dirname, './index.js'),

    ],

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',

    },
    devServer: {
        host: 'localhost',
        port: 8080,
        // match the output path
        static: {
          directory: path.resolve(__dirname, 'dist'),
          // match the output 'publicPath'
          publicPath: '/',
        },
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        compress: true,
        /**
         * proxy is required in order to make api calls to
         * express server while using hot-reload webpack server
         * routes api fetch requests from localhost:8080/api/* (webpack dev server)
         * to localhost:3000/api/* (where our Express server is running)
         */
        // proxy: {
        //   '/api/**': {
        //     target: 'http://localhost:3000/',
        //     secure: false,
        //   },
        //   '/assets/**': {
        //     target: 'http://localhost:3000/',
        //     secure: false,
        //   },
        // },
        proxy: {
            '/': 'http://localhost:3000'
          }
      },

    plugins: [
        new HTMLWebpackPlugin({
            template: './client/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            }
        ]
    },
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
    },
}