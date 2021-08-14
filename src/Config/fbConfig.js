import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAHxZBOFNVt9-HVCbts4ZwxvY3-6DGgxWk",
  authDomain: "project-list123.firebaseapp.com",
  projectId: "project-list123",
  storageBucket: "project-list123.appspot.com",
  messagingSenderId: "281317157245",
  appId: "1:281317157245:web:c00b76b6ee7a91e8f94414",
  measurementId: "G-950Z1Y53SX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.firestore().settings({tim})

export default firebase;
