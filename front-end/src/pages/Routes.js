import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Products from './Products/Products';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ Products } />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default Routes;
