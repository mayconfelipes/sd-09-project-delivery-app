import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/LoginPage';
import Product from './pages/PageCustomer';
import Orders from './pages/CustomerOrders';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import ProductsProvider from './context/ProductsProvider';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Product } />
          <Route path="/customer/orders" component={ Orders } />
          <Route path="/register" component={ Register } />
          <Route path="/customer/checkout" component={ Checkout } />
        </Switch>
      </ProductsProvider>
    </div>
  );
}

export default App;
