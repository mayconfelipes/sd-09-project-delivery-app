import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/admin/manage" component={ AdminDashboard } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
