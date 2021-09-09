import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/LoginPage';
import Product from './pages/customerProducts';
import CustomersOrders from './pages/CustomersOrders';
import SellerOrders from './pages/SellerOrders';
import Register from './pages/Register';
import ProductsProvider from './context/ProductsProvider';
import Checkout from './pages/Checkout';
import OrderDetails from './pages/OrderDetails';
import SellerOrderDetails from './pages/SellerOrderDetails';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Product } />
          <Route path="/register" component={ Register } />
          <Route path="/customer/orders/:id" component={ OrderDetails } />
          <Route path="/customer/orders" component={ CustomersOrders } />
          <Route path="/customer/checkout" component={ Checkout } />
          <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
          <Route path="/seller/orders" component={ SellerOrders } />
          <Route path="/admin/manage" component={ Admin } />
        </Switch>
      </ProductsProvider>
    </div>
  );
}

export default App;
