import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/provider';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={ Register } />
          <Route path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
