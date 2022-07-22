import React from 'react'

const Login = () => {
  return (
   <form>
    <div className="container">
        <label>Username</label>
            <input type="text" placeholder="Enter Username" name="username" required />
            <br />
        <label>Password</label>
            <input type="text" placeholder="Enter Password" name="password" required />
            <br />
        <button type="submit">Log in</button>
        <br />
        Forgot <a href="#"> password? </a>   
    </div>
   </form>
  )
}

export default Login