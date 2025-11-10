import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCFb7yB4t3LWm00aZD8LZJpUlV-ypQDiN8",
  authDomain: "rds-vendas1.firebaseapp.com",
  projectId: "rds-vendas1",
  storageBucket: "rds-vendas1.firebasestorage.app",
  messagingSenderId: "1088074452067",
  appId: "1:1088074452067:web:6599776cad285e6ba8bc56",
  measurementId: "G-GSP55WCEET"
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