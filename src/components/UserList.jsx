import React from 'react';
import Beauty from '../assets/god.jpg';


export const UserList = ({user, setTaggedUser}) => {

  return (
    <div className="user" onClick={() => setTaggedUser(user.id)}>
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
