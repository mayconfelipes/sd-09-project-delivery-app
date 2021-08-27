import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Products from './Pages/Products';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/products" component={ Products } />
      <Route path="/login" component={ Products } />
      <Route path="/register" component={ Products } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
