import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import CustumerProducts from './pages/CustumerProducts';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/customer/products" exact component={ CustumerProducts } />
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
