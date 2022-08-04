import firebase from 'firebase'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB16maSxZfZJ8YXatdK0HLUQUc9SrO6Y70",
  authDomain: "testerdb-4e3ac.firebaseapp.com",
  databaseURL: "https://testerdb-4e3ac-default-rtdb.firebaseio.com",
  projectId: "testerdb-4e3ac",
  storageBucket: "testerdb-4e3ac.appspot.com",
  messagingSenderId: "234247831797",
  appId: "1:234247831797:web:f7366849c2da16260c05bc",
  measurementId: "G-1V6RPZPCRG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db;


