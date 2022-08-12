import firebase from 'firebase'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"
// import "firebase/messaging"
// // require('dotenv').config({path:""})
// import {getMessaging,getToken} from "firebase/messaging";


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

// export const requestForToken = () => {
//   return getToken(messaging, {vapidKey : "BGPAcsThGFR3LiPjTeJwEuE_kBIFdA1nTuyo_KRb1d5EbHrsRvAHl8DfeNG7OH8EFuIdZAAyrnrOq4nNwhh21E0"})
//   .then((currentToken) => {
//     if(currentToken){
//       console.log("clients token: ",currentToken);
//     } else{
//       console.log("no token")
//     }
//   })
//   .catch((err) => {
//     console.log("Eror")
//   })
// }

const firebaseApp = firebase.initializeApp(firebaseConfig)
// const messaging = firebase.messaging()

// const {REACT_APP_VAPID_KEY} = process.env;
// const publickey = REACT_APP_VAPID_KEY;

// export const getToken = async(setTokenFound) => {
//   let currentToken = "";


// try{
//   currentToken = await messaging.getToken({vapidkey : publickey});
//   if(currentToken){
//     setTokenFound(true);
//   }else{
//     setTokenFound(false);
//   }

// }catch(error){
//   console.log("error")
// }
// return currentToken;
// };

// export const onMessageListner = () => new Promise((resolve) => {
//   messaging.onMessageListner((payload) => {
//     resolve(payload)  })
// })
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
// const messaging = getMessaging();
export { auth, provider }
export default db;


