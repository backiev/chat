import React from 'react';
import Cam from '../assets/cam.png';
import More from '../assets/more.png';
import AddPeople from '../assets/add.png';
import Attach from '../assets/attach.png';
import ImgForm from '../assets/img.png';
import Beauty from '../assets/god.jpg';
import {ChatUser} from './ChatUser';


export const Chatbar = () => {
  return (
    <div className='chatbar'>
      <div className="chat-header">
        <div className="chat-name">Jane</div>
        <div className="chat-icons">
          <img src={Cam} alt="Камера" className="chat-icons__img" />
          <img src={AddPeople} alt="Добавить еще людей" className="chat-icons__img" />
          <img src={More} alt="Больше" className="chat-icons__img" />
        </div>
      </div>

      <div className="chat-main">
        <div className="chat-window">
          <ChatUser />
          <ChatUser  />

          <div className="chat-user myself">
            <div className="chat-user__left">
              <img src={Beauty} alt="" />
              <p>just now</p>
            </div>
            <div className="chat-user__message">See you</div>
          </div>
          
        </div>
        
      </div>
      <div className="chat-form">
        <input type="text" placeholder='type message' />
        <img src={Attach} alt="" />
        <img src={ImgForm} alt="" />
        <button>Send</button>
      </div>

    </div>
  )
}
