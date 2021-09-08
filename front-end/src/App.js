import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { LoginProvider } from './context/loginContext';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SellerOrders from './pages/SellerOrders';

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <Switch>
          <Route path="/customer/products" component={ Products } />
          <Route path="/seller/orders" component={ SellerOrders } />
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
