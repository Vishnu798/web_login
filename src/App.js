import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInForm from './components/screens/singnup_form';
import LoginScreen from './components/screens/login_screen';
import HomeScreen from './components/screens/home_screen';

const firebaseConfig = {
  apiKey: "AIzaSyDwbgMU_mnQmgUAbt4cwJuBLqMBZEW0hdU",
  authDomain: "login-db551.firebaseapp.com",
  projectId: "login-db551",
  storageBucket: "login-db551.firebasestorage.app",
  messagingSenderId: "789016552645",
  appId: "1:789016552645:web:5b0af517281ea3a2cebcac",
  measurementId: "G-8Q4RWV14KD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
