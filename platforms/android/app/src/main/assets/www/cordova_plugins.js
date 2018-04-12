cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-appcenter-analytics.Analytics",
    "file": "plugins/cordova-plugin-appcenter-analytics/www/Analytics.js",
    "pluginId": "cordova-plugin-appcenter-analytics",
    "clobbers": [
      "AppCenter.Analytics"
    ]
  },
  {
    "id": "cordova-plugin-appcenter-crashes.Crashes",
    "file": "plugins/cordova-plugin-appcenter-crashes/www/Crashes.js",
    "pluginId": "cordova-plugin-appcenter-crashes",
    "clobbers": [
      "AppCenter.Crashes"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-appcenter-shared": "0.1.3",
  "cordova-plugin-appcenter-analytics": "0.1.3",
  "cordova-plugin-appcenter-crashes": "0.1.3"
};
// BOTTOM OF METADATA
});