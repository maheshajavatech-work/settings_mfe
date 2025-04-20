const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'settings',

  exposes: {
    './Module': 'src/app/settings/settings.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // Adding the library options with scriptType to fix the import.meta error
  library: { type: 'module' },
  // Set the correct script type for the remote entry
  remotes: {},
  filename: 'remoteEntry.js',
  // This is the correct place for scriptType
  runtime: false

});
