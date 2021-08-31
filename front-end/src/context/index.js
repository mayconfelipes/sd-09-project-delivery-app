import React from 'react';
import { node } from 'prop-types';
import { LoginProvider } from './LoginContext';
import { SocketProvider } from './SocketContext';
import { CustomerProvider } from './CustomerContext';

const Provider = ({ children }) => (
  <LoginProvider>
    <SocketProvider>
      <CustomerProvider>
        { children }
      </CustomerProvider>
    </SocketProvider>
  </LoginProvider>
);

Provider.propTypes = { children: node }.isRequired;

export default Provider;
