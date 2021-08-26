import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      {/* <Route exact path="/" component={ Login } /> */}
      <Route exact path="/">
        <Redirect to="/login" component={ Login } />
      </Route>
    </Switch>
  );
}

export default App;
