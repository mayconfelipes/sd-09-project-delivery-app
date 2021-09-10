import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import CustomerOrders from './pages/CustomerOrders';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import OrderDetails from './pages/OrderDetails';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/orders/:id" component={ OrderDetails } />
        <Route path="/customer/orders" component={ CustomerOrders } />
        <Route path="/seller/orders/:id" component={ OrderDetails } />
        <Route path="/seller/orders" component={ SellerOrders } />
        <Route path="/admin/manage" component={ AdminDashboard } />
        <Route path="/customer/products" component={ Products } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route exact path="/">
          <Redirect to="/login" />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
