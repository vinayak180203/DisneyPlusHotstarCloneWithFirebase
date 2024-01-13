import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZlhqxfj9rBB1v0TyZ_GVJ3JCDB5w2p_I",
  authDomain: "disneyplushotstarclone-18e8f.firebaseapp.com",
  projectId: "disneyplushotstarclone-18e8f",
  storageBucket: "disneyplushotstarclone-18e8f.appspot.com",
  messagingSenderId: "584105798553",
  appId: "1:584105798553:web:302a8fcef50785595dc108",
  measurementId: "G-NFFRR7X55X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, dbConfig };
export default dbConfig;  