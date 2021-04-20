/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.jwt = {
    secret: appInfo.name + 'Electric_colud',
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1618573881894_9178';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mongoose = {
    client: {
      url: 'mongodb://localhost:27017/Elctric',
      options: {},
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
