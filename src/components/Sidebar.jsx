import React from 'react';
import Beauty from '../assets/god.jpg';
import { UserList } from './UserList';
import { UserLogin } from './UserLogin';
import { SearchSidebar } from './SearchSidebar';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        
        <UserLogin img={Beauty}/>
        
        <SearchSidebar/>

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
