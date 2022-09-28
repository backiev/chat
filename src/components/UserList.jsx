import React from 'react';
import Beauty from '../assets/god.jpg';


export const UserList = ({user}) => {
  console.log(user);
  // const logo = require(user.img).default;
  return (
    <div className="user">
        <div className="user-img">
            <img src={user.img} alt="woman" />
        </div>
        <div className="user-right">
            <div className="user-name">{user.name}</div>
            <div className="user-message">{user.lastMessage}</div>
        </div>
    </div>
  )
}
