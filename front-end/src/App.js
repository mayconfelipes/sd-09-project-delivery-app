import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CustomerOrders from './pages/CustomerOrders';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/orders" component={ CustomerOrders } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
