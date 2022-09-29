import React from 'react';
import Beauty from '../assets/god.jpg';


export const ChatUser = ({message: {id, yourMessage, message}}) => {
  // console.log(message);
  
  return (
    <div className={yourMessage ? "chat-user myself" : "chat-user"}>
      <div className="chat-user__left">
        <img src={Beauty} alt="" />
        <p>just now</p>
      </div>
      <div className="chat-user__message">{message}</div>
    </div>
  )
}
