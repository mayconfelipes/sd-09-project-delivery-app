import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/customerProducts';
import Orders from './pages/customerOrders';
import Register from './pages/Register';
import AppProvider from './services/AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Product } />
          <Route path="/customer/orders" component={ Orders } />
          <Route path="/register" component={ Register } />
        </Switch>
      </AppProvider>
    </div>
  );
}

export default App;
