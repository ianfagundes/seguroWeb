import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDTA7uwXetABt2UpnsoQEVUUh1Pr7uUuso",
  authDomain: "seguroclient-5938f.firebaseapp.com",
  databaseURL: "https://seguroclient-5938f.firebaseio.com",
  projectId: "seguroclient-5938f",
  storageBucket: "seguroclient-5938f.appspot.com",
  messagingSenderId: "213877226078"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

