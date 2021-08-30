import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import CustumerProducts from './pages/custumerProducts/CustumerProducts';

function App() {
  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/') {
      window.location.href = 'http://localhost:3000/login';
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/customer/products" component={ CustumerProducts } />
        <Route exact path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
        {/* <Route exact path="/">
          <Redirect to="/login" />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
