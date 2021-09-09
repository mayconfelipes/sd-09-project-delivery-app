import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginProvider } from './context/loginContext';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <LoginProvider>
      <div>
        <Switch>
          <Route path="/admin/manage" component={ Admin } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/seller/orders" component={ SellerOrders } />
          <Route path="/customer/checkout" component={ Checkout } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route
            exact
            path="/"
            render={ () => (<Redirect to="/login" />) }
          />
        </Switch>
      </div>
    </LoginProvider>
  );
}

export default App;
