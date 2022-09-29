import React from 'react';
import Cam from '../assets/cam.png';
import More from '../assets/more.png';
import AddPeople from '../assets/add.png';

export const ChatHeader = ({userName}) => {
  return (
    <div className="chat-header">
        <div className="chat-name">{userName}</div>
        <div className="chat-icons">
          <img src={Cam} alt="Камера" className="chat-icons__img" />
          <img src={AddPeople} alt="Добавить еще людей" className="chat-icons__img" />
          <img src={More} alt="Больше" className="chat-icons__img" />
        </div>
      </div>
  )
}
