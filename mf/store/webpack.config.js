const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "moby",
    projectName: "store",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      publicPath: "http://localhost:8080/",
    },
    plugins:[
      new ModuleFederationPlugin({
        name: "store",
        filename: "remoteEntry.js",
        exposes: {
          "./module": "./src/moby-store.ts",
        },
        shared: {
          "rxjs": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "~7.8.0",
          },
        }
      })
    ]
  
  });
};
