import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route exact path="/">
        <Redirect to="/login" component={ Login } />
      </Route>
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
    </Switch>
  );
}

export default App;
