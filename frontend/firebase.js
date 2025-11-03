import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBsdN8hu1Z61InE0u7DSW2iCqlWGP5qam8",
  authDomain: "ktzx-vendas.firebaseapp.com",
  projectId: "ktzx-vendas",
  storageBucket: "ktzx-vendas.firebasestorage.app",
  messagingSenderId: "212089145211",
  appId: "1:212089145211:web:4a44813b67cdbdd4abdfde",
  measurementId: "G-4HRG7DTQ6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//provedor google
const googleProvider = new GoogleAuthProvider();

//funcao login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}

//funcao para logount
async function logout() {
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout};