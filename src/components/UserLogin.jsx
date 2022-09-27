import React from 'react';
// import Beauty from '../assets/god.jpg';


export const UserLogin = ({img}) => {
    // console.log(img);
  return (
    <div className="userLogin">
        <div className='userLogin-logo'>Bakiev Chat</div>
        <div className='userLogin-second'>
            <div className="userLogin-img"><img src={img} alt="woman" /></div>
            <div className="userLogin-name">Jhon</div>
            <button className="userLogin-logout">
                Logout
            </button>
        </div>
    </div>
  )
}
