import React, { useState } from 'react';
import './sass/chat.sass';
import {Sidebar} from './components/Sidebar';
import {Chatbar} from './components/Chatbar';


export const Chat = () => {

  return (
    <div className='App'>
      <div className="container">
          <div className='chat'>
              <Sidebar />
              <Chatbar />
          </div>
      </div>

    </div>
  )
}
