import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import CustomerProvider from '../context/customerProvider';
import SellerProvider from '../context/sellerProvider';
import Login from './Login';
import Checkout from './Checkout';
import ClientProducts from './ClientProducts';
import Register from './Register';
import OrderDetail from './OrderDetail';
import Orders from './Orders';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <CustomerProvider>
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/customer/products" component={ ClientProducts } />
      </CustomerProvider>
      <SellerProvider>
        <Route path="/seller/orders/:id" component={ OrderDetail } />
        <Route path="/seller/orders" component={ Orders } />
      </SellerProvider>
    </Switch>
  </BrowserRouter>
);

export default Routes;
