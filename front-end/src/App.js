import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Redirect,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import SellerOrders from './pages/sellerOrders/SellerOrders';
import CustumerProducts from './pages/custumerProducts/CustumerProducts';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/customer/products" component={ CustumerProducts } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
        <Route exact path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
      </Switch>
    </Router>
  );
}

export default App;
