import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

export const SocketContext = createContext();

const socket = io.connect('http://localhost:3001');

export function SocketProvider({ children }) {
  // const [sales, setSales] = useState({});

  useEffect(() => {
    socket.on('helloWorld', (data) => console.log(data));
  });

  const contextData = {};

  return (
    <SocketContext.Provider value={ contextData }>
      { children }
    </SocketContext.Provider>
  );
}

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
