import React from 'react';
import './sass/login.sass'
import Add from './assets/addAvatar.png'

export const Register = () => {
  return (
    <div className='wrapper'>
        <div className="form">
            <h1>Bakiev Chat</h1>
            <p>Register page</p>
            <input type="text" placeholder='email...' />
            <input type="password" placeholder='password...'/>
            <input type="file" id='imgFile' style={{display: 'none'}}/>
            <label htmlFor="imgFile">
                <img src={Add} alt="" />
                <span>Add an avatar</span>
            </label>
            <button>Register me</button>
            <p>Already have a account? <a href="#">Login</a></p>
        </div>

    </div>
  )
}
