import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import Light from '../theme/light';

const DEFAULT_FORM = {
  email: '',
  password: '',
  name: '',
  redirect: false,
  ableButton: false,
};

function Provider({ children }) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [theme, setTheme] = useState(Light);
  const [register, setRegister] = useState(false);

  const contextValue = {
    form,
    setForm,
    theme,
    setTheme,
    register,
    setRegister,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
