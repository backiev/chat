import React, { useState } from 'react';
import './sass/chat.sass';
import {Sidebar} from './components/Sidebar';
import {Chatbar} from './components/Chatbar';


export const Chat = () => {
  const [userTalk, setUserTalk] = useState(0);

  return (
    <div className="container">
        <div className='chat'>
            <Sidebar setUserTalk={setUserTalk}/>
            <Chatbar userTalk={userTalk} />
        </div>
    </div>
  )
}
