import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFb7yB4t3LWm00aZD8LZJpUlV-ypQDiN8",
  authDomain: "rds-vendas1.firebaseapp.com",
  projectId: "rds-vendas1",
  storageBucket: "rds-vendas1.appspot.com", // ✅ corrigido
  messagingSenderId: "1088074452067",
  appId: "1:1088074452067:web:6599776cad285e6ba8bc56",
  measurementId: "G-GSP55WCEET",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Erro ao autenticar com Google:", error);
    throw error;
  }
}

async function logout() {
  await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };
