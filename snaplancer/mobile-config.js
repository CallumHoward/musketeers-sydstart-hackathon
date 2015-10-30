/*******************************************

  Cordova Settings go here

*******************************************/


//Allow Google files and google maps to work on phone app
App.accessRule("*");

// Set PhoneGap/Cordova preferences
App.setPreference('StatusBarStyle', 'lightcontent');

//Make storage local rather than iCloud
App.setPreference('BackupWebStorage', 'local');


// Set up resources such as icons and launch screens.
App.icons({
  'ipad': 'resources/icons/ios/Icon-76.png',
  'ipad_2x': 'resources/icons/ios/Icon-76@2x.png',
  'iphone': 'resources/icons/ios/Icon-60.png',
  'iphone_2x': 'resources/icons/ios/Icon-60@2x.png',
  'iphone_3x': 'resources/icons/ios/Icon-60@3x.png',

  'android_ldpi': 'resources/icons/android/drawable-ldpi/ic_launcher.png',
  'android_mdpi': 'resources/icons/android/drawable-mdpi/ic_launcher.png',
  'android_hdpi': 'resources/icons/android/drawable-hdpi/ic_launcher.png',
  'android_xhdpi': 'resources/icons/android/drawable-xhdpi/ic_launcher.png',
});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/splash.png',
  'iphone_2x': 'resources/splash/splash.png',
  'iphone5': 'resources/splash/splash.png',
  'iphone6': 'resources/splash/splash.png',
  'iphone6p_portrait': 'resources/splash/splash.png',
  'iphone6p_landscape': 'resources/splash/splash.png',

  'ipad_portrait': 'resources/splash/splash.png',
  'ipad_portrait_2x': 'resources/splash/splash.png',
  'ipad_landscape': 'resources/splash/splash.png',
  'ipad_landscape_2x': 'resources/splash/splash.png',

  // Android
  'android_ldpi_portrait': 'resources/splash/splash.png',
  'android_ldpi_landscape': 'resources/splash/splash.png',
  'android_mdpi_portrait': 'resources/splash/splash.png',
  'android_mdpi_landscape': 'resources/splash/splash.png',
  'android_hdpi_portrait': 'resources/splash/splash.png',
  'android_hdpi_landscape': 'resources/splash/splash.png',
  'android_xhdpi_portrait': 'resources/splash/splash.png',
  'android_xhdpi_landscape': 'resources/splash/splash.png'
});
