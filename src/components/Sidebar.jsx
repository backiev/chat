import React, { useEffect, useState} from 'react';
import Beauty from '../assets/god.jpg';
import { UserList } from './UserList';
import { UserLogin } from './UserLogin';
import { SearchSidebar } from './SearchSidebar';
import { useSelector} from 'react-redux';

const userLogged = {
  id: 123,
  name: 'Bakiev',
  img: {Beauty}
}

export const Sidebar = ({}) => {

  const users = useSelector(state => state.users.users)


  return (
    <div className='sidebar'>
        
        <UserLogin user={userLogged} />
        
        <SearchSidebar />

        <div className="usersList">
          
          {users.map(user => <UserList user={user} key={user.id}/>)}

        </div>
    </div>
  )

}
