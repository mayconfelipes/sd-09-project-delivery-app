import React from 'react';
import { node } from 'prop-types';
import { LoginProvider } from './LoginContext';

const Provider = ({ children }) => (
  <LoginProvider>
    { children }
  </LoginProvider>
);

Provider.propTypes = { children: node }.isRequired;

export default Provider;
