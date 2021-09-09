import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import { io } from 'socket.io-client';

import SocketsContext from './SocketsContext';

export default function SocketsProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const value = { socket };

  return (
    <SocketsContext.Provider value={ value }>
      {children}
    </SocketsContext.Provider>
  );
}

SocketsProvider.propTypes = {
  children: func.isRequired,
};
