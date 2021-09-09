import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from './pages/comum/Login';
import Register from './pages/comum/Register';
import Products from './pages/customer/Products';
import SellerOrderDetails from './pages/seller/SellerOrderDetails';
import CustomerOrderDetails from './pages/customer/CustomerOrderDetails';
import Checkout from './pages/customer/Checkout';
// import SuccessfulShopping from './pages/customer/SuccessfulShopping';
import CustomerOrders from './pages/customer/CustomerOrders';
import SellerOrders from './pages/seller/SellerOrders';
import Management from './pages/admin/Management';
import { GlobalStateProvider } from './context/GlobalStateProvider';

function App() {
  return (
    <GlobalStateProvider>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route
        exact
        path="/customer/orders/:id"
        render={ (props) => <CustomerOrderDetails { ...props } /> }
      />
      <Route exact path="/customer/orders" component={ CustomerOrders } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
      <Route
        exact
        path="/seller/orders/:id"
        render={ (props) => <SellerOrderDetails { ...props } /> }
      />
      <Route exact path="/admin/manage" component={ Management } />
      { /* <SuccessfulShopping /> */ }
    </GlobalStateProvider>
  );
}

export default App;
