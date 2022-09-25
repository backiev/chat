import React from 'react';
import Add from './assets/addAvatar.png'

export const Login = () => {
  return (
    <div className='wrapper'>
        <div className="login">
            <h1>Bakiev Chat</h1>
            <p>Login page</p>
            <input type="text" placeholder='email...' />
            <input type="password" placeholder='password...'/>
            <input type="file" id='imgFile' style={{display: 'none'}}/>
            <label htmlFor="imgFile">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
            </label>
            <button>Sign it</button>
            <p>Dont have account? <a href="#">Register</a></p>
        </div>

    </div>
  )
}
