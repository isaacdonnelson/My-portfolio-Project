const path = require("path");

module.exports = {
  mode: "development",
  entry: "./build/module.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  watch: true,
};
