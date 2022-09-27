import React from 'react';
import Beauty from '../assets/god.jpg';


export const ChatUser = () => {
  return (
    <div className="chat-user">
      <div className="chat-user__left">
        <img src={Beauty} alt="" />
        <p>just now</p>
      </div>
      <div className="chat-user__message">See you</div>
    </div>
  )
}
