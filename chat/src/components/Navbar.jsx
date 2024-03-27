import React from 'react'
import {auth} from '../firebase/config'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import {AuthContext} from '../contexts/AuthContext'
const Navbar = () => {

  const {girisKullanici}=useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>AOS Chat</span>
      <div className='user'>
        <img src={girisKullanici.photoURL} alt="" />
        <span>{girisKullanici.displayName}</span>
        <button onClick={()=>signOut(auth)}>Çıkış</button>
      </div>
    </div>
  )
}

export default Navbar
