const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const getNrwlReactWebpackConfig = require('@nrwl/react/plugins/webpack');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

/**
 * We use the NX_TSCONFIG_PATH environment variable when using the @nrwl/angular:webpack-browser
 * builder as it will generate a temporary tsconfig file which contains any required remappings of
 * shared libraries.
 * A remapping will occur when a library is buildable, as webpack needs to know the location of the
 * built files for the buildable library.
 * This NX_TSCONFIG_PATH environment variable is set by the @nrwl/angular:webpack-browser and it contains
 * the location of the generated temporary tsconfig file.
 */
const tsConfigPath =
  process.env.NX_TSCONFIG_PATH ??
  path.join(__dirname, '../../tsconfig.base.json');

const workspaceRootPath = path.join(__dirname, '../../');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  tsConfigPath,
  [
    /* mapped paths to share */
    '@angular-with-react-micro-frontends-example/shared/data-access-products',
    '@angular-with-react-micro-frontends-example/shared/data-access-cart',
    '@angular-with-react-micro-frontends-example/shared/data-access-header',
  ],
  workspaceRootPath
);

module.exports = (config) => {
  const nrwlReactWebpackConfig = getNrwlReactWebpackConfig(config);

  nrwlReactWebpackConfig.output = {
    ...nrwlReactWebpackConfig.output,
    uniqueName: 'cart',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  };

  nrwlReactWebpackConfig.optimization = {
    ...nrwlReactWebpackConfig.optimization,
    runtimeChunk: false,
  };

  nrwlReactWebpackConfig.resolve = {
    ...nrwlReactWebpackConfig.resolve,
    alias: {
      ...sharedMappings.getAliases(),
    },
  };

  nrwlReactWebpackConfig.plugins.push(
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': 'apps/cart/src/app/remote-entry.tsx',
      },
      shared: {
        react: { singleton: true, strictVersion: true },
        'react-dom': { singleton: true, strictVersion: true },
        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin()
  );

  return nrwlReactWebpackConfig;
};
