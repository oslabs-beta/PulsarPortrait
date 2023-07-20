const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [ 
       path.resolve(__dirname, './index.tsx'),

    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',

    },
    devServer: {
        host: 'localhost',
        port: 7080,
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
        proxy: {
            '/': 'http://localhost:3333'
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
                test: /.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", 'sass-loader']
            }
        ]
    },
    resolve: {
        // Enable importing JS / JSX / TS / TSX files without specifying their extension
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}