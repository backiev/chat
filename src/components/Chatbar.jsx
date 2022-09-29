  import React, { useEffect, useState } from 'react';

  import Attach from '../assets/attach.png';
  import ImgForm from '../assets/img.png';
  // import Beauty from '../assets/god.jpg';
  import {ChatUser} from './ChatUser';
  import {ChatHeader} from './ChatHeader';
  import {users} from '../objects/users.js';

  const messagesArray = [
      [{
        id: 0,
        idUserOnChat: 0,
        yourMessage: false,
        message: 'Hi!!!',
      },
      {
        id: 1,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'yo',
      },
      {
        id: 2,
        idUserOnChat: 0,
        yourMessage: false,
        message: 'How u doing?',
      },
      {
        id: 3,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'ALL gucci',
      },
    ],
    [
      {
        id: 0,
        idUserOnChat: 1,
        yourMessage: false,
        message: 'Hi!!!',
      },
      {
        id: 1,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'yo',
      },
      {
        id: 2,
        idUserOnChat: 1,
        yourMessage: false,
        message: 'How u doing?',
      },
      {
        id: 3,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'ALL gucci',
      },
    ],
    [
      {
        id: 0,
        idUserOnChat: 2,
        yourMessage: false,
        message: 'Hi!!!',
      },
      {
        id: 1,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'yo',
      },
      {
        id: 2,
        idUserOnChat: 2,
        yourMessage: false,
        message: 'How u doing?',
      },
      {
        id: 3,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'ALL gucci',
      },
    ],
    [
      {
        id: 0,
        idUserOnChat: 3,
        yourMessage: false,
        message: 'Hi!!!',
      },
      {
        id: 1,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'yo',
      },
      {
        id: 2,
        idUserOnChat: 3,
        yourMessage: false,
        message: 'How u doing?',
      },
      {
        id: 3,
        idUserOnChat: 123,
        yourMessage: true,
        message: 'ALL gucci',
      },
    ],
  ]




  export const Chatbar = ({userTalk}) => {

    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState(messagesArray[0]);

    const createMessage = (e) => {
      e.preventDefault();

      messagesArray[userTalk] = [...messages, {
        id: messages.length,
        idUserOnChat: 123,
        yourMessage: true,
        message: newMessage
      }];

      setMessages([...messages, {
        id: messages.length,
        idUserOnChat: 123,
        yourMessage: true,
        message: newMessage
      }]);



      setNewMessage('');

    }

    useEffect(() => {
      const chatWindow = document.querySelector('.chat-main');
      chatWindow.scrollTo(0, chatWindow.scrollHeight);
      setMessages(messagesArray[userTalk]);
      // console.log(messages);
    })

    return (
      <div className='chatbar'>
        
        <ChatHeader userName={users[userTalk].name} />

        <div className="chat-main">
          <div className="chat-window">

            {messages.map((message) => <ChatUser message={message} key={message.id} user={users[userTalk]} />)}

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
