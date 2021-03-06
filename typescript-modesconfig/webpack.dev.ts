import webpack from "webpack";
import webpackCommonConfig from "./webpack.common";
import webpackMerge from "webpack-merge";

const webpackDevConfig: webpack.Configuration = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: true
  }
};

export default webpackMerge(webpackCommonConfig, webpackDevConfig);