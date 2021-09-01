import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Products, Login, Register, OrderDetail } from './Pages';
import CartProvider from './contexts/CartContext';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Switch>
        <Route path="/customer/orders/:id" component={ OrderDetail } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
