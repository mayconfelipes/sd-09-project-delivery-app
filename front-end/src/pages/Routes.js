import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import ClientProducts from './ClientProducts';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/customer/products" component={ ClientProducts } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
