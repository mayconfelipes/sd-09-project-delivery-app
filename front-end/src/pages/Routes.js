import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import CustomerProvider from '../context/customerProvider';
import Checkout from './Checkout';
import ClientProducts from './ClientProducts';
import Register from './Register';
import Admin from './Admin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/admin/manage" component={ Admin } />
      <CustomerProvider>
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/products" component={ ClientProducts } />
      </CustomerProvider>
    </Switch>
  </BrowserRouter>
);

export default Routes;
