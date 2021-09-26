import firebase from 'firebase';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAztYNxBqM4enNWniX8iAnS_xr3hdUOcWI",
  authDomain: "inmo-a0f0c.firebaseapp.com",
  projectId: "inmo-a0f0c",
  storageBucket: "inmo-a0f0c.appspot.com",
  messagingSenderId: "777715201773",
  appId: "1:777715201773:web:8590be10e8ded90c79bee4",
  measurementId: "G-W5NMYV6QGJ"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fbStorage = firebase.storage()
const fbStore = firebase.firestore()
const fbAuth = firebase.auth()

export {fbStorage, fbStore, fbAuth}