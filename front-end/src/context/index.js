import React from 'react';
import { node } from 'prop-types';
import { LoginProvider } from './LoginContext';
import { SocketProvider  } from './SocketContext';

const Provider = ({ children }) => (
  <LoginProvider>
    <SocketProvider>
      { children }
    </SocketProvider>
  </LoginProvider>
);

Provider.propTypes = { children: node }.isRequired;

export default Provider;
