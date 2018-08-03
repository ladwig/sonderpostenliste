import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyBasTbzUCwBQMHFPyZO1eTHILXmKvUZ2ms",
  authDomain: "datenbank-78357.firebaseapp.com",
  databaseURL: "https://datenbank-78357.firebaseio.com",
  projectId: "datenbank-78357",
  storageBucket: "datenbank-78357.appspot.com",
  messagingSenderId: "372867904061"
}

var fire = firebase.initializeApp(config)

export default fire
