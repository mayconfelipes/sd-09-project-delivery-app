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
import Admin from './Admin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/admin/manage" component={ Admin } />
      <Route
        path="/seller/orders/:id"
        render={ () => <SellerProvider><OrderDetail /></SellerProvider> }
      />
      <Route
        path="/seller/orders"
        render={ () => <SellerProvider><Orders /></SellerProvider> }
      />
      <Route
        path="/customer/checkout"
        render={ () => <CustomerProvider><Checkout /></CustomerProvider> }
      />
      <Route
        path="/customer/products"
        render={ () => <CustomerProvider><ClientProducts /></CustomerProvider> }
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
