import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import ClientProducts from './ClientProducts';
import Register from './Register';
import CustomerProvider from '../context/customerProvider';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <CustomerProvider>
        <Route path="/customer/products" component={ ClientProducts } />
      </CustomerProvider>
    </Switch>
  </BrowserRouter>
);

export default Routes;
