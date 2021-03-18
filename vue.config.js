const path = require("path");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://desolate-reaches-37168.herokuapp.com/",
      },
    },
  },
  outputDir: path.resolve(__dirname, "../backend/public"),
};
