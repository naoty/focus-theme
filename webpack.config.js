const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/stylesheets/index.css",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "javascripts")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("../stylesheets/bundle.css")
  ]
};
