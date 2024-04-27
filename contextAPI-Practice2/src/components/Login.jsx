import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const {setUser} = useContext(UserContext)
	const clickHandler = (e) => {
		e.preventDefault()
		setUser({username, password})
	}
  return (
	<div>
	  <h2>Login</h2>
	  <input type="text"
	  placeholder='username' 
	  value={username}
	  onChange={(e) => setUsername(e.target.value)}
	  />
	  <input type="text"
	  placeholder='password' 
	  value={password} 
	  onChange={(e) => setPassword(e.target.value)}/>
	  <button onClick={clickHandler}>submit</button>
	</div>
  )
}

export default Login
