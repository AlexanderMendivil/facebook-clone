import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCzPzCWLeqJI4df6Q8IRx33nhfTIDxGUAw",
    authDomain: "facebook-clone-f13d2.firebaseapp.com",
    databaseURL: "https://facebook-clone-f13d2.firebaseio.com",
    projectId: "facebook-clone-f13d2",
    storageBucket: "facebook-clone-f13d2.appspot.com",
    messagingSenderId: "37598128224",
    appId: "1:37598128224:web:10c05eaa75e03924597b05",
    measurementId: "G-8Y1GR44N4T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;