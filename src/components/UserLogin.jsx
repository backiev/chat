import React from 'react';


export const UserLogin = ({user}) => {
  // console.log(user.img);
  return (
    <div className="userLogin">
        <div className='userLogin-logo'>Bakiev Chat</div>
        <div className='userLogin-second'>
            <div className="userLogin-img"><img src={user.img.Beauty} alt="woman" /></div>
            <div className="userLogin-name">{user.name}</div>
            <button className="userLogin-logout">
                Logout
            </button>
        </div>
    </div>
  )
}
