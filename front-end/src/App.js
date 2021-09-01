import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CustomerOrders from './pages/CustomerOrders';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/orders" component={ CustomerOrders } />
        <Route path="/customer/products" component={ Products } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
