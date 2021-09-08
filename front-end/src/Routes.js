import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Gerenciamento from './pages/Gerenciamento';
import Login from './pages/login';
import Orders from './pages/Orders';
import Produtos from './pages/Produtos';
import Registro from './pages/registro';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/register" component={ Registro } />
    <Route exact path="/customer/products" component={ Produtos } />
    <Route exact path="/customer/orders" component={ Orders } />
    <Route exact path="/customer/checkout" component={ Checkout } />
    <Route exact path="/admin/manage" component={ Gerenciamento } />
  </Switch>
);

export default Routes;
