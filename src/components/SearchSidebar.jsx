import React from 'react';
import { UserList } from './UserList';

export const SearchSidebar = () => {
  return (
    <div className="search">
        <div className="search-form">
            <input type="text" placeholder='Find a user' />
        </div>
        <div className="search-list">
            <UserList/>
        </div>
    </div>
  )
}
