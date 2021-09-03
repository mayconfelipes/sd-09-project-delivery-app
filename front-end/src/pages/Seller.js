import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderSeller from '../components/HeaderNav';
import Orders from './Orders';
import OrdersDetails from './OrdersDetails';

class Seller extends React.Component {
  render() {
    const user = JSON.parse(localStorage.getItem('user')) || {};

    if (!user.token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <HeaderSeller />
        <Switch>
          <Route path="/seller/orders/:id" component={ OrdersDetails } />
          <Route path="/seller/orders" component={ Orders } />
        </Switch>
      </div>
    );
  }
}

export default Seller;
