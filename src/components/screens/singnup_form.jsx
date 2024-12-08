import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signInWithRedirect,getRedirectResult } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignInForm() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();
    const signInWithGoogle = ()=>{
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("google login details",user)
          navigate('/home')
          
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log("google login  error details", error);
          
          // ...
        });
      }
      const singupFunction = (email,password)=>{

        const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            
            console.log("user ingup success with user",user);
          navigate('/home')

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error in sign up",error);
            // ..
          });
        }
        const NavigateToLoginScreen = ()=>{
          navigate("/login");
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
    singupFunction(formData.email,formData.password)
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
      <button className="btn btn-primary" type="submit">Sign In</button>
      <div className='center-button'>
      <button onClick={signInWithGoogle} class="google-btn">
  <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" alt="Google Logo"/>
  Sign in with Google
</button>
      </div>
      <button onClick={NavigateToLoginScreen} class="login-btn">Already have an account? Log in</button>
    </form>
</>
   
  );
}

export default SignInForm;