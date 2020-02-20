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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(err){
        console.log('error creating user', err.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;