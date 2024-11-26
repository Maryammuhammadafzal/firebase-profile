

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail ,FacebookAuthProvider ,signInWithPopup   } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


// // Your web app's Firebase configuration
// const firebaseConfig = {
//    apiKey: "AIzaSyB1Z8l4b9ZdDE93fUKj2ISdsq_iJCKuktk",
//    authDomain: "application-b62ee.firebaseapp.com",
//    projectId: "application-b62ee",
//    storageBucket: "application-b62ee.firebasestorage.app",
//    messagingSenderId: "323280021517",
//    appId: "1:323280021517:web:829dcce68acdcbd3308d44",
//    measurementId: "G-CJQ3Y74YWE"
//  };


//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const auth = getAuth(app);
//   const provider = new FacebookAuthProvider();


//   export { auth, analytics, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail ,FacebookAuthProvider,signInWithPopup   } 


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import { getAuth,onAuthStateChanged ,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import { getFirestore,collection, addDoc  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDalf8NlmbDM3tgNFMYhMKdawTXA72ZmFY",
    authDomain: "social-media-app-f2d99.firebaseapp.com",
    projectId: "social-media-app-f2d99",
    storageBucket: "social-media-app-f2d99.firebasestorage.app",
    messagingSenderId: "1095979122324",
    appId: "1:1095979122324:web:0631a933967e4fbbb27e81",
    measurementId: "G-YD0JEYGB7C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();

  export { auth, analytics, app,onAuthStateChanged ,createUserWithEmailAndPassword , db,collection, addDoc, provider,signInWithPopup};
  