import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Products,
  Login,
  Register,
  Checkout,
  CustumeOrders,
  OrderDetail,
  SellerOrders,
  SellerDetails,
  AdminManager,
} from './Pages';

import './App.css';
import { CartProvider } from './Contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Switch>
        <Route path="/customer/orders/:id" component={ OrderDetail } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/orders" component={ CustumeOrders } />
        <Route path="/seller/orders/:id" component={ SellerDetails } />
        <Route path="/seller/orders" component={ SellerOrders } />
        <Route path="/admin/manage" component={ AdminManager } />

        <Route
          path="/login"
          component={ !localStorage.getItem('user')
            ? Login
            : () => <Redirect to="/customer/products" /> }
        />

        <Route path="/register" component={ Register } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </CartProvider>

  );
}

export default App;
