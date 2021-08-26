import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './index';
import Light from '../theme/light';

const DEFAULT_FORM = {
  email: '',
  password: '',
  name: '',
  redirect: false,
};

function Provider({ children }) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [theme, setTheme] = useState(Light);

  const contextValue = {
    form,
    setForm,
    theme,
    setTheme,
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
