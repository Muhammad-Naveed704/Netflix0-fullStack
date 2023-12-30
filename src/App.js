import './App.css';
import React, { useEffect } from 'react';
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import {auth} from "./firebase"
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';


const router = createBrowserRouter([
  {
    
    path: "/",
    element: <HomeScreen></HomeScreen>,
  },
  {
    path: "/login",
    element: <LoginScreen></LoginScreen>
  },
  {
    path: "/signup",
    element: <SignUpScreen></SignUpScreen>
  },
  {
    path: "/signin",
    element: <SignInScreen></SignInScreen>
  },
  {
    path: "/profile",
    element: <ProfileScreen></ProfileScreen>
  },
  

 ]);

     function App() {

      const dispatch = useDispatch();
      const user = useSelector(selectUser);
      // useEffect(()=>{

      //     const unsubscribe = auth.onAuthStateChanged(userAuth => {
      //     if(userAuth){
      //       //login
      //       console.log(userAuth);
      //       dispatch(
      //         login({
      //         uid:userAuth.uid,
      //         email:userAuth.email,
      //       })
      //       );
      //     }else{
      //       // logout
      //       dispatch(logout)
      //     };
      //   })
      //   return unsubscribe;
      // },[])
      useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
          if (userAuth) { 
            // login
            console.log(userAuth);
            dispatch(
              login({
                uid: userAuth.uid,
                email: userAuth.email,
              })
            );
          } else {
            // logout
            dispatch(logout());
          }
        });
    
        return unsubscribe;
      }, [dispatch]);


  return (
    <div className='App'> 
    <RouterProvider router={router}>
    {user ? (
          // User is logged in, render the HomeScreen
          <HomeScreen />
        ) : (
          // User is not logged in, render the LoginScreen
          <LoginScreen />
        )}
      </RouterProvider>
    
    </div>
  );
}

export default App




    // <Router>
    //   {!user ? (
    //     <LoginScreen />
    //   ):(
    //     <Route exact path="/"  element = {<HomeScreen></HomeScreen>} />
    //   )
    // }

    //     <Routes>
        
    //   </Routes>
    // </Router>