const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
const webpack = require('webpack');

module.exports = (env) => {

    console.log('*** From webpack config')
    return {
        entry: './src/index.js',
        output: {
            path:path.join(__dirname,'public','dist'),
            filename:'bundle.js'
        },
        mode: 'none',
        module: {
            rules:[{
                loader: 'babel-loader',
                test:/\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        {
            test:/\.s?css$/,
//            use:['style-loader', 'css-loader', 'sass-loader']
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
        },
        plugins:[
            new MiniCssExtractPlugin({filename: 'styles.css'}),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
            
        ],
        devServer: {
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}