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

const DEFAULT_CART = {
  totalValue: 0.00,
  products: [],
};

function Provider({ children }) {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [register, setRegister] = useState(false);
  const [theme, setTheme] = useState(Light);
  const [enableButton, setEnableButton] = useState(false);
  const [cart, setCart] = useState(DEFAULT_CART);
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allSales, setAllSales] = useState([]);

  const contextValue = {
    form,
    setForm,
    register,
    setRegister,
    theme,
    setTheme,
    enableButton,
    setEnableButton,
    cart,
    setCart,
    catalog,
    setCatalog,
    loading,
    setLoading,
    allSales,
    setAllSales,
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
