import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  Login,
  Register,
  NotFound,
} from '../Pages';
import Products from '../Pages/CustomerPages/Products';
import paths from './paths';

const Routes = () => (
  <Switch>
    <Route path={ paths.customer.products } component={ Products } />
    <Route path={ paths.register } component={ Register } />
    <Route path={ paths.login } component={ Login } />
    <Route exact path={ paths.home } component={ HomePage } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
