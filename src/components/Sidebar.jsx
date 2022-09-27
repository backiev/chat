import React from 'react';
import Beauty from '../assets/god.jpg';
import { UserList } from './UserList';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="userLogin">
            <div className='userLogin-logo'>Bakiev Chat</div>
            <div className='userLogin-second'>
                <div className="userLogin-img"><img src={Beauty} alt="woman" /></div>
                <div className="userLogin-name">Jhon</div>
                <button className="userLogin-logout">
                    Logout
                </button>
            </div>
        </div>
        <div className="search">
            <div className="search-form">
                <input type="text" placeholder='Find a user' />
            </div>
            <div className="search-list">
                <div className="userSearch">
                    <div className="userSearch-img">
                        <img src={Beauty} alt="woman" />
                    </div>
                    <div className="userSearch-name">
                        Ksusha
                    </div>
                </div>
            </div>
        </div>
        <div className="usersList">
            <UserList/>
            {/* <UserList/> */}
            <UserList/>
            {/* <UserList/> */}
            {/* <UserList/> */}
            <UserList/>

        </div>
    </div>
  )
}
