import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AppContext from './context';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const router = useHistory();

  const signIn = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      setUser(response.data);
      router.push('/customer/products');
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    user,
    signIn,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Provider;
