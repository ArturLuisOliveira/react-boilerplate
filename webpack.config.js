const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@atoms': path.resolve(__dirname, 'src/components/atoms/'),
            '@molecules': path.resolve(__dirname, 'src/components/molecules/'),
            '@organisms': path.resolve(__dirname, 'src/components/organisms/'),
            '@pages': path.resolve(__dirname, 'src/components/pages/'),
            '@templates': path.resolve(__dirname, 'src/components/templates/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /test/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};
