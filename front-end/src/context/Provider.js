import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [totalPriceContext, setTotalPriceContext] = useState(0);

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    totalPriceContext,
    setTotalPriceContext,
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
