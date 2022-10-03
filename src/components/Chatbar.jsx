import React, { useEffect, useState } from 'react';

import Attach from '../assets/attach.png';
import ImgForm from '../assets/img.png';
// import Beauty from '../assets/god.jpg';
import {ChatUser} from './ChatUser';
import {ChatHeader} from './ChatHeader';
// import {users} from '../objects/users.js';
// import {messagesArray} from '../objects/messagesArray.js';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../features/messages/messagesSlice';






export const Chatbar = ({}) => {


  const users = useSelector(state => state.users.users);
  const userTalk = users.find(user => user.tagged);
  const messagesArray = useSelector(state => state.messages.messages);
  const dispatch = useDispatch();

  const [messages, setMessages] = useState(messagesArray[0]);
  const [newMessage, setNewMessage] = useState('');



  const createMessage = (e) => {
    e.preventDefault();

    const messageObj = {
      id: messages.length,
      idUserOnChat: 123,
      idToUser: userTalk.id,
      yourMessage: true,
      message: newMessage
    };

    dispatch(addMessage(messageObj));
    setNewMessage('');
  }

  useEffect(() => {
    const chatWindow = document.querySelector('.chat-main');
    chatWindow.scrollTo(0, chatWindow.scrollHeight);
    setMessages(messagesArray[userTalk.id]);
  })

  return (
    <div className='chatbar'>
      
      <ChatHeader userName={users[userTalk.id].name} />

      <div className="chat-main">
        <div className="chat-window">

          {messages.map((message) => <ChatUser message={message} key={message.id} user={users[userTalk.id]} />)}

        </div>
        
      </div>
      <form className="chat-form">
        <input type="text" placeholder='type message' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <img src={Attach} alt="" />
        <img src={ImgForm} alt="" />
        <button onClick={createMessage}>Send</button>
      </form>

    </div>
  )
}
