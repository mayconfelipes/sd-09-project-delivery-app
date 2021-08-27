import React from 'react';
import { Route, Switch, Redirect } from 'react-router';// import './App.css';
import DeliveryProvider from './context/deliveryProvider';
import Login from './pages/login';
import Register from './pages/register/Register';
import Products from './pages/products/Products';

function App() {
  return (
    <DeliveryProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="login" />
        </Route>
        <Route path="/login" exact component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ Products } />
      </Switch>
    </DeliveryProvider>
  );
}

export default App;
