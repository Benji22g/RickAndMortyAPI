
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBbgqb7NlaSct7_xgNPhmIowA1xi0fkH24",
    authDomain: "rickandmorty-23a7d.firebaseapp.com",
    projectId: "rickandmorty-23a7d",
    storageBucket: "rickandmorty-23a7d.appspot.com",
    messagingSenderId: "649515889530",
    appId: "1:649515889530:web:e6b1257a98deb5d8bc9cc3",
    measurementId: "G-LZ4JX4ZG7T"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export function signOutGoogle(){
    firebase.auth().signOut()
}
export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
}

