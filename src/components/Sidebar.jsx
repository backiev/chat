import React, { useEffect} from 'react';
import Beauty from '../assets/god.jpg';
import { UserList } from './UserList';
import { UserLogin } from './UserLogin';
import { SearchSidebar } from './SearchSidebar';
import {users} from '../objects/users.js';

export const Sidebar = () => {

  const userLogged = {
    id: 123534,
    name: 'Bakiev',
    img: {Beauty}
  }  

  return (
    <div className='sidebar'>
        
        <UserLogin user={userLogged} />
        
        <SearchSidebar />

        <div className="usersList">
          
          {users.map(user => <UserList user={user} key={user.id} />)}

        </div>
    </div>
  )

}
