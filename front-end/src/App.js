import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Register from './pages/register/Register';

import './App.css';
// import rockGlass from './images/rockGlass.svg';
import DeliveryProvider from './context/deliveryProvider';
import Login from './pages/login';

function App() {
  return (
    <DeliveryProvider>
      <div className="App">
        <Login />
      </div>
      <Switch>
        <Route path="/register" component={ Register } />
      </Switch>
    </DeliveryProvider>
  );
}

export default App;
