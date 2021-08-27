import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Services/Auth';
import {
  HomePage,
  Login,
  NotFound,
} from '../Pages';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ (props) => (isAuthenticated() ? (
      <Component { ...props } />
    ) : (
      <Redirect to={ { pathname: '/', state: { from: props.location } } } />
    )) }
  />
);

const Routes = () => (

  <Switch>
    <Route exact path="/" component={ Login } />
    <PrivateRoute path="/home" component={ HomePage } />
    <Route component={ NotFound } />
  </Switch>

);

export default Routes;
