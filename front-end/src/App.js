import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Router>
      <div>App Delivery</div>
      <Switch>
        <Route path="/register" exact component={ Register } />
        <Route path="/login" exact component={ Login } />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
