import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrderDetails from './pages/SellerOrderDetails';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" component={ Login } />
      </Route>
      <Route path="/register" component={ Register } />
      <Route path="/admin/manage" component={ Admin } />
      <Route path="/customer/order/:id" component={ CustomerOrderDetails } />
      <Route path="/seller/order/:id" component={ SellerOrderDetails } />
    </Switch>
  );
}

export default App;
