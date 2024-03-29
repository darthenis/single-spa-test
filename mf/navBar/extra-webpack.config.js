const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (config, options) => {

  config.output = {
    ...config.output,
    uniqueName: "navBar",
  };
  config.optimization = { ...config.optimization, runtimeChunk: false };
  config.plugins = [
    ...config.plugins,
    new ModuleFederationPlugin({
      shared: {
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^16.2.0",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^16.2.0",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^16.2.0",
        },
        rxjs: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "~7.8.0",
        },
        "single-spa": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^6.0.1",
        },
        "single-spa-angular": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^9.0.1",
        },
      },
      remotes:{
        shared : "shared@http://localhost:8080/remoteEntry.js",
      },
      name: "navBar",
      filename: "remoteEntry.js",
      exposes: {
        "./module": "./src/main.single-spa.ts",
      },
    }),
  ];

  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
