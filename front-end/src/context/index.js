import React from 'react';
import { node } from 'prop-types';
import { SocketProvider } from './SocketContext';
import { CustomerProvider } from './CustomerContext';

const Provider = ({ children }) => (
  <SocketProvider>
    <CustomerProvider>
      { children }
    </CustomerProvider>
  </SocketProvider>
);

Provider.propTypes = { children: node }.isRequired;

export default Provider;
