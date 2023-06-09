import React from 'react';
import {Link} from 'react-router-dom';


export const UserLogin = ({user}) => {
  // console.log(user.img);
  return (
    <div className="userLogin">
        <div className='userLogin-logo'>Bakiev Chat</div>
        <div className='userLogin-second'>
            <div className="userLogin-img"><img src={user.img.Beauty} alt="woman" /></div>
            <div className="userLogin-name">{user.name}</div>
            <button className="userLogin-logout">
                <Link to="/login">Logout</Link>
            </button>
        </div>
    </div>
  )
}
