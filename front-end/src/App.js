import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { DeliveryProvider } from './context/deliveryProvider';
import Admin from './pages/Admin';
import Custommer from './pages/Custommer';
import OrdersSeller from './pages/OrdersSeller';
import DetailsOrderSeller from './pages/DetailsOrderSeller';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from './pages/Register/Register';
import OrdersCustomer from './pages/OrdersCustomer';
import DetailsOrderCustomer from './pages/DetailsOrderCustomer';
import './App.css';

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
        <Route path="/customer/orders/:id" component={ DetailsOrderCustomer } />
        <Route path="/customer/orders" component={ OrdersCustomer } />
        <Route path="/customer/checkout" component={ Checkout } />
        <Route path="/seller/orders/:id" component={ DetailsOrderSeller } />
        <Route path="/seller/orders" component={ OrdersSeller } />
        <Route path="/admin/manage" component={ Admin } />
        <Route path="/admin/register" component={ Admin } />
      </Switch>
    </DeliveryProvider>
  );
}

export default App;
