import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

function AppProvider({ children }) {
  const [currentOrder, setCurrentOrder] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const globalContextObj = {
    currentOrder,
    userInfo,
    setCurrentOrder,
    setUserInfo,
  };

  return (
    <main>
      <context.Provider value={ globalContextObj }>
        { children }
      </context.Provider>
    </main>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
