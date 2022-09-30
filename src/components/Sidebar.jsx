import React, { useEffect, useState} from 'react';
import Beauty from '../assets/god.jpg';
import { UserList } from './UserList';
import { UserLogin } from './UserLogin';
import { SearchSidebar } from './SearchSidebar';
import {users} from '../objects/users.js';

const userLogged = {
  id: 123,
  name: 'Bakiev',
  img: {Beauty}
}

export const Sidebar = ({setUserTalk}) => {

  const [taggedUser, setTaggedUser] = useState(0);
  setUserTalk(taggedUser);
  return (
    <div className='sidebar'>
        
        <UserLogin user={userLogged} />
        
        <SearchSidebar setTaggedUser={setTaggedUser} />

        <div className="usersList">
          
          {users.map(user => <UserList user={user} key={user.id} setTaggedUser={setTaggedUser} />)}

        </div>
    </div>
  )

}
