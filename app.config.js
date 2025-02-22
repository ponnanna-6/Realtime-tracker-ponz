export default {
  "expo": {
    "name": "reactandroid",
    "slug": "reactandroid",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.ponz.reactandroid",
      "googleServicesFile": process.env.GOOGLE_SERVICES_INFOPLIST,
    },
    "android": {
      "package": "com.ponz.reactandroid",
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON,
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      "@react-native-google-signin/google-signin"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "7c8ae770-b375-40b0-ac00-02e453f3d8db"
      }
    }
  }
}
