import { initializeApp } from "firebase/app";
// ❌ Removido o import de analytics (não necessário)
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFb7yB4t3LWm00aZD8LZJpUlV-ypQDiN8",
  authDomain: "rds-vendas1.firebaseapp.com",
  projectId: "rds-vendas1",
  storageBucket: "rds-vendas1.firebasestorage.app",
  messagingSenderId: "1088074452067",
  appId: "1:1088074452067:web:6599776cad285e6ba8bc56",
  measurementId: "G-GSP55WCEET", // pode deixar, mesmo que não use
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ❌ removido o analytics
// const analytics = getAnalytics(app);

const auth = getAuth(app);

// Provedor Google
const googleProvider = new GoogleAuthProvider();

// Função login popup
async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
}

// Função logout
async function logout() {
  await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };
