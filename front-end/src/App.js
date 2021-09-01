import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import Notfound from './pages/Notfound';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route path="/seller/orders" />
      <Route path="/admin/manager" />
      <Route component={ Notfound } />
    </Switch>
  );
}

export default App;
