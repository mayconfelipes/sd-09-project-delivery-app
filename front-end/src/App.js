import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/LoginPage';
import Product from './pages/customerProducts';
import CustomerOrders from './pages/customerOrders';
import Register from './pages/Register';
import ProductsProvider from './context/ProductsProvider';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Product } />
          <Route path="/register" component={ Register } />
          <Route path="/customer/orders/1" component={ CustomerOrders } />
          <Route path="/customer/checkout" component={ Checkout } />
        </Switch>
      </ProductsProvider>
    </div>
  );
}

export default App;
