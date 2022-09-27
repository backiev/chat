import React from 'react';
import Beauty from '../assets/god.jpg';


export const UserList = () => {
  return (
    <div className="user">
        <div className="user-img">
            <img src={Beauty} alt="woman" />
        </div>
        <div className="user-right">
            <div className="user-name">Ylya</div>
            <div className="user-message">Hello, miss you</div>
        </div>
    </div>
  )
}
