import React from 'react'
import "./ProfileScreen.css"
import Nav from '../Nav'
import {auth} from "../firebase"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/UserSlice'
import PlansScreen from './PlansScreen'
import { Link } from 'react-router-dom'

function ProfileScreen() {
  const user =  useSelector(selectUser)
  return (
    <div className='ProfileScreen'>
      <Nav />
      <div className="ProfileScreen_body">
        <h1>Edit Profile</h1>
      <div className="ProfileScreen_info">
        <img  src="https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" alt="" />
        <div className="ProfileScreen_details">
        <h2>{user.email}</h2>
        <div className="ProfileScreen_plans">
          <h3>Plans</h3>
          <PlansScreen />
      <Link to="/login">
        <button className='ProfileScreen_signOut' onClick={() => auth.signOut()}>Sign Out</button>
        </Link>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ProfileScreen