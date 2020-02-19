import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBhqGauxrcf_NdgVc9-7LVj7faveyzl6GY",
    authDomain: "crwn-db-c5433.firebaseapp.com",
    databaseURL: "https://crwn-db-c5433.firebaseio.com",
    projectId: "crwn-db-c5433",
    storageBucket: "crwn-db-c5433.appspot.com",
    messagingSenderId: "1093957683253",
    appId: "1:1093957683253:web:1b3b808f65d9646bef497c",
    measurementId: "G-MXYWP3D35D"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;