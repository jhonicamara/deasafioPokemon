const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

console.log('getDefaultConfig', getDefaultConfig);
const config = {
  resolver: {
    unstable_enablePackageExports: false,
    unstable_conditionNames: ['browser', 'require', 'react-native'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
