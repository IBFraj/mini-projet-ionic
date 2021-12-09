// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {

    apiKey: "AIzaSyC0IOZHEXyCBEXJnfdOE_g9aGjDITwDwy4",
    authDomain: "todolist-4029a.firebaseapp.com",
    databaseURL: "https://todolist-4029a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todolist-4029a",
    storageBucket: "todolist-4029a.appspot.com",
    messagingSenderId: "316242966383",
    appId: "1:316242966383:web:fe2e63e10f818d68881a9a",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
