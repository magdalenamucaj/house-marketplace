import { useState, useEffect } from 'react'
import {getAuth} from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'

function Profile() {
  const auth = getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const navigate = useNavigate()

  const onLogout = (e) => {
    auth.signOut()
    navigate('/')
  }
  return (
    <div className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button type='button' className="logOut" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default Profile