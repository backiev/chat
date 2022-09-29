import React, { useEffect, useState } from 'react';

import Attach from '../assets/attach.png';
import ImgForm from '../assets/img.png';
import Beauty from '../assets/god.jpg';
import {ChatUser} from './ChatUser';
import {ChatHeader} from './ChatHeader';

const messagesArray = [
  {
    id: 0,
    yourMessage: false,
    message: 'Hi!!!',
  },
  {
    id: 1,
    yourMessage: true,
    message: 'yo',
  },
  {
    id: 2,
    yourMessage: false,
    message: 'How u doing?',
  },
  {
    id: 3,
    yourMessage: true,
    message: 'ALL gucci',
  },
];


export const Chatbar = () => {


  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(messagesArray);

  const createMessage = (e) => {
    e.preventDefault();

    setMessages([...messages, {
      id: messages.length,
      yourMessage: true,
      message: newMessage
    }]);

    setNewMessage('');

  }

  useEffect(() => {
    console.log(messages);

  })

  return (
    <div className='chatbar'>
      
      <ChatHeader />

      <div className="chat-main">
        <div className="chat-window">


          {messages.map((message) => <ChatUser message={message} key={message.id} />)}

          
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
