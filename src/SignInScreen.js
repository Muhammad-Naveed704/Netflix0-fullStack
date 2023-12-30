import "./SignInScreen.css"
import React, {  useState } from 'react';
import {  Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { login } from "./features/UserSlice";

function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    
    const logIn = async (e) => {
        e.preventDefault();
        try {
         await  signInWithEmailAndPassword(auth, email, password).then((authUser) => {
          alert("user login ho gya"+ authUser)
                console.log(authUser);
                navigate("/profile")
            });
          } catch (error) {
            // console.error(error);
            alert(error.message)
          }
    };
      
  return (
    <div className="main">
    <div className="section">
    <div className='signinScreen'>
        <form >
            <h1>Sign In</h1>
            
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
         
            <button className="login_button" type='submit' onClick={logIn}> Sign In</button>
         
            <h4 className="goto_signup">
                <span className='signinScreen_gray'>New To Netflix? </span>
               <Link to={"/signup"}>
                <span className='signinScreen_link' >Sign Up Now</span>
                </Link>
            </h4>
        </form>
    </div>
    </div>
    </div>
  )
}

export default SignInScreen



// import "./SignUpScreen.css"
// import React, {  useState } from 'react';
// import {  Link, useNavigate } from 'react-router-dom';

// import { createUserWithEmailAndPassword } from 'firebase/auth';

// import { auth } from './firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import LoginScreen from "./LoginScreen";
// // import { login } from "./features/UserSlice";
// // signin
// function SignUpScreen() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
  
//     // const emailRef =useRef(null);
//     // const passwordRef =useRef(null);
//     const register = async (e) => {
//         e.preventDefault();
//         try {
//          await createUserWithEmailAndPassword(auth, email, password).then((authUser) => {

//                 console.log(authUser);
//             });
//           } catch (error) {
//             // console.error(error);
//             alert(error.message)
//           }
//     };
// // signin
    
//     const logIn = async (e) => {
//         e.preventDefault();
//         try {
//          await  signInWithEmailAndPassword(auth, email, password).then((authUser) => {
//           alert("user login ho gya"+ authUser)
//                 console.log(authUser);
//                 navigate("/profile")
//             });
//           } catch (error) {
//             // console.error(error);
//             alert(error.message)
//           }
//     };
      
//   return (
//    <div className="main">
//     {/* <LoginScreen ></LoginScreen> */}
    
//     <div className='signupScreen'>
//         <form >
//             <h1>Sign Up</h1>
            
//           < input
//           type="email"
//           placeholder="Your Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Your Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//             <button type='submit' onClick={register}> Sign Up</button>
//         <Link to={"/"}>
//             </Link>
//             <h4>
//                <Link to={"/signn"}>
//                 {/* <span className='signupScreen_link' ></span> */}
             
//                <span className='signupScreen_gray'>Already have Account </span>
//                </Link>
//             </h4>
//         </form>
//     </div>
//     </div>

//   )
// }

// // onClick={logIn}


// export default SignUpScreen





