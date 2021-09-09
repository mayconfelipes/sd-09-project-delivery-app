import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

io('http://localhost:3001');

function Admin() {
  useEffect(() => {

  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <button
        type="button"
        onClick={ () => socketRef.current.emit('teste', { teste: 'Olá' }) }
      >
        Teste
      </button>
    </div>
  );
}

export default Admin;
