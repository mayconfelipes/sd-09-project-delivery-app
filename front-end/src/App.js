import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Switch>
      <Route path="/" component={ Login } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
