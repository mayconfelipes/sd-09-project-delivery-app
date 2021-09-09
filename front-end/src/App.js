import React from 'react';
import Routes from './Routes';
import ProductsProvider from './context/ProductsProvider';
import UsersProvider from './context/UsersProvider';
import SocketsProvider from './context/SocketsProvider';

function App() {
  return (
    <ProductsProvider>
      <UsersProvider>
        <SocketsProvider>
          <Routes />
        </SocketsProvider>
      </UsersProvider>
    </ProductsProvider>
  );
}

export default App;
