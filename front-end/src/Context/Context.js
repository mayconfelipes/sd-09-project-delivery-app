import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const Context = createContext();
const Provider = ({ children }) => {
  // dados do usuário logado pelo localStorage
  const [userData, setUserData] = useState(localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')) : []);
  // carrinho
  const [cart, setCart] = useState([]);
  const context = {
    userData,
    setUserData,
    cart,
    setCart,
  };
  return (
    <Context.Provider value={ context }>{ children }</Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
