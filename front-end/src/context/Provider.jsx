import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { getTotalCartLocalStorage } from '../utils/storage';

function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [totalCart, setTotalCart] = useState(getTotalCartLocalStorage);

  const contextValue = {
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    totalCart,
    setTotalCart,

  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
