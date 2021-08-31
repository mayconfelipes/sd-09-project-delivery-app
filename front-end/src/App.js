import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Products, Login, Register } from './Pages';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/products" component={ Products } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default App;
