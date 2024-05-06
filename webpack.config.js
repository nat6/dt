const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devServer = (isDev) =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
        },
      };

module.exports = ({ development }) => ({
  mode: development ? 'development' : 'production',
  devtool: development ? 'inline-source-map' : false,
  entry: {
    index: __dirname + '/src/pages/index/index.js',
  },
  output: {
    filename: 'script/[name].min.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: "[id].css"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/assets',
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

    new HtmlWebpackPlugin({
      filename: 'pages/index.html',
      template: 'src/pages/index/index.html',
      chunks: ['index']
    }),
  ],

  resolve: {
    extensions: ['.ts', '.js'],
  },
  ...devServer(development),
});
