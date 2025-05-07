// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Configurações do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASOJ1cU36bnJZTD5VHQ58R1qd7-q6616s",
  authDomain: "app-gambiarra-admin-huvet.firebaseapp.com",
  projectId: "app-gambiarra-admin-huvet",
  storageBucket: "app-gambiarra-admin-huvet.firebasestorage.app",
  messagingSenderId: "491881420187",
  appId: "1:491881420187:web:dd0d29902bfe8e2bf3fd3e",
};
// Inicializa o app Firebase
const app = initializeApp(firebaseConfig);
// Exporta o Firestore para usar no projeto//
const db = getFirestore(app);
export { db };

//meu nome é augusto daniel alves serpa
