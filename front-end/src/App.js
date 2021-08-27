import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Pages/Products';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/products" component={ Products } />
    </Switch>
  );
}

export default App;
