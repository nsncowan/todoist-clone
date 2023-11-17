/* This is where we'll initialize Firebase in our application and create a database reference. 
Note that Firebase is not prescriptive about what we name our configuration file or where we located, 
so it's up to us to pick a name and location that is sensible and intuitive. */



import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth }; 



// ALT VERSION

  
// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyBT7nCs5c-cVZD5eX4CQFDAyDrbkfTM_n8",
//   authDomain: "todoist-clone-49415.firebaseapp.com",
//   projectId: "todoist-clone-49415",
//   storageBucket: "todoist-clone-49415.appspot.com",
//   messagingSenderId: "884599370213",
//   appId: "1:884599370213:web:f24b2916910a167bb9ff0c"
  
//   // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   // appId: process.env.REACT_APP_FIREBASE_APP_ID 
// });

// export { firebaseConfig as firebase };

