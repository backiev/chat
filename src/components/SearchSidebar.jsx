import React, {useEffect, useState} from 'react';
import { UserList } from './UserList';

export const SearchSidebar = () => {
  let usersList, searchList = '';

  const [searchFocus, setSearchFocus] = useState(0);

  useEffect(() => {
    usersList = document.querySelector('.usersList');
    searchList = document.querySelector('.search-list');
    if (searchFocus) {
      usersList.style.display = 'none';
      searchList.style.display = 'block';
    } else {
      usersList.style.display = 'block';
      searchList.style.display = 'none';
    }
  });
  return (
    <div className="search">
        <div className="search-form">
            <input type="text" placeholder='Find a user' onFocus={() => setSearchFocus(1)} onBlur={() => setSearchFocus(0)} />
        </div>
        <div className="search-list">
            {/* <UserList /> */}
            {/* <UserList/> */}
            {/* <UserList/> */}

        </div>
    </div>
  )
}
