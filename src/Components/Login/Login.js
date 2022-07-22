import React from 'react'

const Login = () => {
  return (
   <form>
    <div className="container">
        <label>Username</label>
            <input type="text" placeholder="Enter Username" name="username" required />
        <label>Password</label>
            <input type="text" placeholder="Enter Password" name="password" required />
        <button type="submit">Log in</button>
    </div>
   </form>
  )
}

export default Login