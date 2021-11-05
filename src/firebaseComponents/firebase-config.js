/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAp3NHL8wxyRwdFNYIeq75AEs_DQirBlB8",
  authDomain: "whereswaldo-8f997.firebaseapp.com",
  projectId: "whereswaldo-8f997",
  storageBucket: "whereswaldo-8f997.appspot.com",
  messagingSenderId: "805399591966",
  appId: "1:805399591966:web:f7bc77d7bf7ae8faea020f"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}