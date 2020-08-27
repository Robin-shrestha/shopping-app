const path = require("path");
module.exports = {
  mode: "development",
  entry: "./shopper/frontend/src/index.js",
  output: {
    filename: "main1.js",
    path: path.resolve(__dirname, "shopper/static/dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
