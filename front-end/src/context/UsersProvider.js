import React, { useState } from 'react';
import { func } from 'prop-types';

import UsersContext from './UsersContext';

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = (...user) => {
    console.log(user);
    setUsers([...users, ...user]);
  };

  const removeUser = (user) => setusers([user]);

  const value = {
    users,
    addUser,
    removeUser,
  };

  return (
    <UsersContext.Provider value={ value }>
      {children}
    </UsersContext.Provider>
  );
}

UsersProvider.propTypes = {
  children: func.isRequired,
};
