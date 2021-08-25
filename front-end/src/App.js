import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import DeliveryProvider from './context/deliveryProvider';

function App() {
  return (
    <DeliveryProvider>
      <div className="App">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
      </div>
    </DeliveryProvider>
  );
}

export default App;
