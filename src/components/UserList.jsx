import React, { useTransition } from 'react';
import Beauty from '../assets/god.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTag } from '../features/users/usersSlice';


export const UserList = ({user}) => {

  const dispatch = useDispatch();

  return (
    <div className="user" onClick={() => dispatch(toggleTag(user.id))}>
        <div className="user-img">
            <img src={user.img} alt="woman" />
        </div>
        <div className="user-right">
            <div className="user-name">{user.name} {user.tagged ? '23' : 'false'}</div>
            <div className="user-message">{user.lastMessage}</div>
        </div>
    </div>
  )
}
