import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Product from './pages/customerProducts';
import Orders from './pages/customerOrders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/login" component={ Login } />
          <Route path="/customer" component={ Product } />
          <Route path="/orders" component={ Orders } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
