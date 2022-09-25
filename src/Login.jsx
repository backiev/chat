import React from 'react';
import './sass/login.sass'
// import Add from './assets/addAvatar.png'

export const Login = () => {
  return (
    <div className='wrapper'>
        <div className="form">
            <h1>Bakiev Chat</h1>
            <p>Login page</p>
            <input type="text" placeholder='email...' />
            <input type="password" placeholder='password...'/>
            <button>Sign it</button>
            <p>Dont have account? <a href="#">Register</a></p>
        </div>

    </div>
  )
}
