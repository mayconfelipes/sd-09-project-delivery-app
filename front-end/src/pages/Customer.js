import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import HeaderCustomer from '../components/HeaderCustomer';
import Products from './Products';
import Checkout from './Checkout';
import OrdersDetails from './OrdersDetails';
import Orders from './Orders';

class CustomerHeader extends React.Component {
  render() {
    const user = JSON.parse(localStorage.getItem('user')) || {};

    if (!user.token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <HeaderCustomer />
        <Switch>
          <Route path="/customer/orders/:id" component={ OrdersDetails } />
          <Route path="/customer/orders" component={ Orders } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/customer/checkout" component={ Checkout } />
        </Switch>
      </div>
    );
  }
}

export default CustomerHeader;
