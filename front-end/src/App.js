import React from 'react';
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
    </DeliveryProvider>
  );
}

export default App;
