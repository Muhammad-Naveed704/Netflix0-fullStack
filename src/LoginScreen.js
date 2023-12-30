import React, { useState } from 'react'
import "./LoginScreen.css"
import SignupScreen from './SignUpScreen';
import { Link } from 'react-router-dom';
import SignInScreen from './SignInScreen';



function LoginScreen() {
    const [signIn , setSignin]= useState(false)
  return (
    <div className='LoginScreen'>
        <div className="LoginScreen_Background">
            <img className='LoginScreen_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
            <button className='loginScreen_button' onClick={()=> setSignin(true)}>Sign in</button>
            <div className="loginScreen_gradient"/>
        </div>
            <div className="loginScreen_body">
                { signIn ?(
                <SignInScreen />
                ):(
                    <>
                    <h1>Ultimate films TV Programs And More </h1>
                    <h2>Watch anywhare. Cancel at any time. </h2>
                    <p>Ready to Watch Enter You Email To Create or Restart Your MemberShip</p>
                    <div className="loginScreen_input">
                        <form >
                        {/* <input type="email" placeholder='EmailAddress' /> */}
                        <Link to={"/signup"}>
                        <button  className='loginScreen_getStarted' > GET STARTED</button>
                        </Link>
                        </form>
                    </div>
                    </>  
                )}
                
            </div>
    </div>
  )
}

export default LoginScreen











