import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Registro from './pages/registro';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/register" component={ Registro } />
  </Switch>
);

export default Routes;
