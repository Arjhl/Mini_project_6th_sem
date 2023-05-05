import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfJZ3OF1X7zyFuBJN0W4wbNJg3SO2IUFk",

  authDomain: "auth-967e6.firebaseapp.com",

  projectId: "auth-967e6",

  storageBucket: "auth-967e6.appspot.com",

  messagingSenderId: "812657521424",

  appId: "1:812657521424:web:652af6c7e611427098ab95",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res.emailVerified);
    return res;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { auth, signInWithGoogle };
