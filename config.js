import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAOChx12lfJCyNIQ12ghYuIfdesRNmHHZ4",
  authDomain: "book-santa-e226e.firebaseapp.com",
  projectId: "book-santa-e226e",
  storageBucket: "book-santa-e226e.appspot.com",
  messagingSenderId: "22187246013",
  appId: "1:22187246013:web:ea5329294e8dd1c6b152d4"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
