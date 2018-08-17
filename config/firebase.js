import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCy6RYP2fHqCzP_LF68zvJlKG8UBzJIUA0",
  authDomain: "sonderpostenliste.firebaseapp.com",
  databaseURL: "https://sonderpostenliste.firebaseio.com",
  projectId: "sonderpostenliste",
  storageBucket: "sonderpostenliste.appspot.com",
  messagingSenderId: "388109605764"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
