import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-8cLyb2lRmPfs_kIpUvSGO1jtVieVszc",
    authDomain: "crwn-db-5c5c6.firebaseapp.com",
    databaseURL: "https://crwn-db-5c5c6.firebaseio.com",
    projectId: "crwn-db-5c5c6",
    storageBucket: "crwn-db-5c5c6.appspot.com",
    messagingSenderId: "35432955799",
    appId: "1:35432955799:web:3f5d45600ca6beeb"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;