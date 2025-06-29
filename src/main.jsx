import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2t7Kn4nXbIU7R0V6XuTWna8xNx4y-VS4",
  authDomain: "migamia-f067c.firebaseapp.com",
  projectId: "migamia-f067c",
  storageBucket: "migamia-f067c.firebasestorage.app",
  messagingSenderId: "1043078991066",
  appId: "1:1043078991066:web:0421c059d08cf909a3a9e3",
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
