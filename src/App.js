import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import { Chat } from './Chat';
import './normalize.css';
import './App.css';
import './sass/main.sass';



function App() {

  return (
    <>
      {/* <div className="App">
        <Chat />
      </div> */}
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>} />
        {/* <Route path="*" element={<Register/>} /> */}
      </Routes>
    </>
  );
}

export default App;
