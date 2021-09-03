import React from 'react';
import Routes from './Routes';
import ProductsProvider from './context/ProductsProvider';
import UsersProvider from './context/UsersProvider';

function App() {
  return (
    <ProductsProvider>
      <UsersProvider>
        <Routes />
      </UsersProvider>
    </ProductsProvider>
  );
}

export default App;
