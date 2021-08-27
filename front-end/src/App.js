import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/customerProducts';
import Orders from './pages/customerOrders';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer/products" component={ Product } />
          <Route path="/customer/orders" component={ Orders } />
          <Route path="/register" component={ Register } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
