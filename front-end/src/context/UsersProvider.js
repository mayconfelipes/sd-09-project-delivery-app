import React, { useState } from 'react';
import { func } from 'prop-types';

import UsersContext from './UsersContext';

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  const addUser = (...user) => {
    console.log(user);
    setUsers([...users, ...user]);
  };

  const removeUser = (userId) => {
    const remainingUsers = users.filter(({ id }) => id !== userId);
    setUsers(remainingUsers);
  };

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
