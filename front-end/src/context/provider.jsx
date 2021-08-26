import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './index';

const DEFAULT_FORM = {
  email: '',
  password: '',
  name: '',
  redirect: false,
};

function Provider({ children }) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [register, setRegister] = useState(false);

  const contextValue = {
    form,
    setForm,
    register,
    setRegister,
  };

  return (
    <context.Provider value={ contextValue }>
      { children }
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
