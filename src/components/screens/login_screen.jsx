import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signInWithRedirect,getRedirectResult } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const navigate = useNavigate();
    const loginFunction = ()=>{
        const auth = getAuth();
      signInWithEmailAndPassword(auth, 'vishnukhandelwal1001@gmail.com', 'qwertyuiopp')
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("user ingup success with user",user);
          navigate('/home')
      
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error in sign up",error);
      
        });
      }
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        loginFunction(formData.email,formData.password)
       console.log("formdata is ",formData);
      };



      
  return (
    <>
<form className="sign-in-form" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={loginFunction} className="btn btn-primary" type="submit">Login</button>
    </form>
</>
  )
}

export default LoginScreen