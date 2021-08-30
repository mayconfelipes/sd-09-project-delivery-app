import React from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom';
=======
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Services/Auth';
>>>>>>> 1b1c82d2d6289049b4ef3d89c8159f322577fff6
import {
  HomePage,
  Login,
  NotFound,
} from '../Pages';
<<<<<<< HEAD
import PrivateRoute from './PrivateRoute';
=======

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
>>>>>>> 1b1c82d2d6289049b4ef3d89c8159f322577fff6

const Routes = () => (

  <Switch>
<<<<<<< HEAD
    {/* <Route exact path="/" component={ HomePage } /> */}
    <Route exact path="/login" component={ Login } />
    <PrivateRoute path="/" component={ HomePage } />
=======
    <Route exact path="/" component={ Login } />
    <PrivateRoute path="/home" component={ HomePage } />
>>>>>>> 1b1c82d2d6289049b4ef3d89c8159f322577fff6
    <Route component={ NotFound } />
  </Switch>

);

export default Routes;
