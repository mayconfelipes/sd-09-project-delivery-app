import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cart, setCart] = useState([]);

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    cart,
    setCart,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
