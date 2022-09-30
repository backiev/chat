import React, {useEffect, useState} from 'react';
import { UserList } from './UserList';
import {users} from '../objects/users';

export const SearchSidebar = ( {setTaggedUser} ) => {
  let usersList, searchList = '';

  const [searchFocus, setSearchFocus] = useState(0);
  const [query, setQuery] = useState("");


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

  const queryForSearch = (e) => {
    setQuery(e.target.value.toLowerCase());
  }


  return (
    <div className="search">
        <div className="search-form">
            <input type="text" placeholder='Find a user' value={query} onChange={queryForSearch} onFocus={() => setSearchFocus(1)} onBlur={() => setSearchFocus(0)} />
        </div>
        <div className="search-list">

          {query ? 
          users.filter( user => user.name.toLowerCase().includes(query) )
          .map(user => <UserList user={user} key={user.id} setTaggedUser={setTaggedUser} /> ) 
          : ''}

        </div>
    </div>
  )
}
