import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './components/pages/Register';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" />
      <Route path="/register" component={ Register } />
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
