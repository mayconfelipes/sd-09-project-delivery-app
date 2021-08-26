import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Orders from './pages/Orders';
import './App.css';
import Products from './pages/Products';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" />
      <Route exact path="/customer/orders/:id" />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route path="/seller/orders" />
      <Route path="/admin/manager" />
      <Route component={ Notfound } />
    </Switch>
  );
}

export default App;
