import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
 const {user} = useContext(UserContext)
 if (!user) return <div>Loading...</div>
 return <div> Welcome Dear {user.username} </div>
}

export default Profile
