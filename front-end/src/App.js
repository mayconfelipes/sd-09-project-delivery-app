import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" />
      <Route exact path="/customer/products" />
      <Route exact path="/customer/checkout" />
      <Route exact path="/customer/orders/:id" />
      <Route exact path="/customer/orders" />
      <Route path="/seller/orders" />
      <Route path="/admin/manager" />
    </Switch>
  );
}

export default App;
