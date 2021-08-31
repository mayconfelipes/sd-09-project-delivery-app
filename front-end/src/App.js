import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerOrders from './pages/CustomersOrders';
import Checkout from './pages/Checkout';
import AppProvider from './services/AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/customer/orders" component={ CustomerOrders } />
          <Route path="/customer/checkout" component={ Checkout } />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
