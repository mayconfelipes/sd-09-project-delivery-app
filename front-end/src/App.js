import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
// import rockGlass from './images/rockGlass.svg';
import DeliveryProvider from './context/deliveryProvider';
import Login from './pages/login';
import Register from './pages/register/Register';

function App() {
  return (
    <DeliveryProvider>
      <div className="App">
        {/* <Login /> */}
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
        </Switch>
      </div>
    </DeliveryProvider>
  );
}

export default App;
