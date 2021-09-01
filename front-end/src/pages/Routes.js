import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import ClientProducts from './ClientProducts';
import Register from './Register';


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/customer/products" component={ ClientProducts } />
      <Route path="/register" component={ Register } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
