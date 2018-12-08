let path = require("path");
const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.Node_env === "production" ? "/zcx/" : "/";

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  // 打包不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: "http://localhost:4000"
  }
};
