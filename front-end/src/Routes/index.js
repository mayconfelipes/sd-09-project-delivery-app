import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  Login,
  Register,
  NotFound,
} from '../Pages';
import Products from '../Pages/CustomerPages/Products';
import PrivateRoute from './PrivateRoute';
import paths from './paths';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path={ paths.home } component={ HomePage } />
    <Route path={ paths.login } component={ Login } />
    <Route path={ paths.customerProducts } component={ Products } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
