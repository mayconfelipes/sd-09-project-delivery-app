import React from 'react';
import { Route, Switch, Redirect } from 'react-router';// import './App.css';
import DeliveryProvider from './context/deliveryProvider';
import Admin from './pages/Admin';
import Custommer from './pages/Custommer';
import Login from './pages/Login';
import Products from './pages/Products';

import Register from './pages/Register/Register';

function App() {
  return (
    <DeliveryProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="login" />
        </Route>
        <Route path="/login" exact component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ Custommer } />
        <Route path="/customer/checkout" component={ Custommer } />
        <Route path="/customer/orders" component={ Products } />
        <Route path="/customer/orders/:id" component={ Custommer } />
        {/* <Route path="/seller/orders" component={ Seller } />
        <Route path="/seller/orders/:id" component={ Seller } /> */}
        <Route path="/admin/manage" component={ Admin } />
        <Route path="/admin/register" component={ Admin } />
      </Switch>
    </DeliveryProvider>
  );
}

export default App;
