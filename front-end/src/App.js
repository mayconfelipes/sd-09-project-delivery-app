import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CustomerOrders from './pages/CustomerOrders';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';

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
        <Route path="/admin/manage" component={ AdminDashboard } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/seller/orders" component={ SellerOrders } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
