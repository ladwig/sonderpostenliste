import * as firebase from 'firebase'

const config = {
  apiKey: "xxx",
  authDomain: "sonderpostenliste.firebaseapp.com",
  databaseURL: "https://sonderpostenliste.firebaseio.com",
  projectId: "sonderpostenliste",
  storageBucket: "sonderpostenliste.appspot.com",
  messagingSenderId: "xxx"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
