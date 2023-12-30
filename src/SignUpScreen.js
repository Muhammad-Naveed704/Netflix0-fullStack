import "./SignUpScreen.css"
import React, {  useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';


function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
   const register = async (e) => {
        e.preventDefault();
        try {
         await createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
          navigate("/")
                console.log(authUser);
            });
          } catch (error) {
            // console.error(error);
            alert(error.message)
          }
    };
// signin
    
    
      
  return (
   <div className="main">
    <div className="section">
    
    <div className='signupScreen'>
        <form >
            <h1>Sign Up</h1>
            
          < input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
            <button className="register_button" type='submit' onClick={register}> Sign Up</button>
      
           
            <h4 className='signupScreen_gray'>
               <Link to={"/signin"}>
                {/* <span className='signupScreen_link' ></span> */}
                <span className='signupScreen_gray'>Already have Account </span>
               </Link>
            </h4>
        </form>
    </div>
    </div>
    </div>

  )
}

// onClick={logIn}


export default SignUpScreen




