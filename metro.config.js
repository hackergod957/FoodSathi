const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

// Add 'cjs' to the asset extensions
defaultConfig.resolver.assetExts.push('cjs');

// Export the final configuration
module.exports = withNativeWind(defaultConfig, { input: './app/globals.css' });
