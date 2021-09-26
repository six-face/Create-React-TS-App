const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve('dist'),
    filename: 'script/[name].[contenthash:6].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        include: path.resolve('./src'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:5]',
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'imgs/[name].[contenthash:6].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:6].css',
    }),
    new HtmlWebapckPlugin({
      filename: 'index.html',
      template: './src/index.html',
      // setting up your website icon
      // favicon: path.resolve()
    }),
  ],
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3370,
    open: ['http://localhost:3370/'],
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
    // writting your final files to your dist folder every time so that you can check it, you can comment out this line
    // proxy to external server
    // proxy: {
    // '/api': {
    // server that you wanna reach
    //     tagert: '',
    //     secure: true,
    //     changeOrigin: true
    //   }
    // }
  },
}
