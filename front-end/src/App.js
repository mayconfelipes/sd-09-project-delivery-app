import React from 'react';
import './App.css';
import Login from './Components/Organisms/LoginForm';
import Logo from './Components/Organisms/Logo';

function App() {
  return (
    <div className="App">
      <span className="logo">PSY BEER</span>
      <Logo />
      <Login />
    </div>
  );
}

export default App;
