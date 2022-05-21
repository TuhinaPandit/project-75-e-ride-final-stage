import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBi6qHdC_BNj4tHbVYNzqtaQspuxtmo76E",
  authDomain: "e-ride-stage-4--pro71.firebaseapp.com",
  projectId: "e-ride-stage-4--pro71",
  storageBucket: "e-ride-stage-4--pro71.appspot.com",
  messagingSenderId: "193988597899",
  appId: "1:193988597899:web:7637884dfc681f5ae19c8e",
  measurementId: "G-G3K7BWL5LH"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

