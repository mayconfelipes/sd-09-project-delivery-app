import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const contextValue = {
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
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
