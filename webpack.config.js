const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    "js/main.js": [path.resolve(__dirname, "src/main.js")]
  },
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "static")
  },
  plugins: [
    new CleanWebpackPlugin(["static/js/*", "static/css/*", "static/webfonts/*"]),
    // new OptimizeCSSAssetsPlugin({
    //   assetNameRegExp: /\.css$/g,
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "css/[name].css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "webfonts" // where the fonts will go
            }
          }
        ]
      }
    ]
  }
};