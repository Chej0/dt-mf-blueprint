const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  // remotes: {
  //   "mfe1": "http://localhost:3000/remoteEntry.js",    
  // },


  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

moduleFederationConfig.output.publicPath = 'http://localhost:4200/';
module.exports = moduleFederationConfig;