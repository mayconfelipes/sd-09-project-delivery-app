import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  HomePage,
  Login,
  Register,
  NotFound,
  Checkout,
  Products,
  Orders,
} from '../Pages';

import paths from './paths';

const Routes = () => (
  <Switch>
    <Route exact path={ paths.home } component={ HomePage } />
    <Route path={ paths.login } component={ Login } />
    <Route path={ paths.register } component={ Register } />
    <Route path={ paths.customerProducts } component={ Products } />
    <Route exact path={ paths.customerCheckout } component={ Checkout } />
    <Route exact path={ paths.customerOrders } component={ Orders } />
    <Route component={ NotFound } />
  </Switch>
);

export default Routes;
