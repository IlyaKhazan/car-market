const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve('./src/index.html')}),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test:  /\.(png|jpe?g|gif|jp2|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)?$/,
        include: path.resolve(__dirname, "./src"),
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "./src")],
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx", ".css"],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 8080,
    liveReload: true,
    historyApiFallback: true
  },
}
