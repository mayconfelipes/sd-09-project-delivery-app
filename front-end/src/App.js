import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Products, Login, Register, SellerOrders, SellerDetails } from './Pages';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
      <Route path="/seller/orders/:id" component={ SellerDetails } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
