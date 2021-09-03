import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Customer from './pages/Customer';
import Seller from './pages/Seller';
import FormAdmin from './pages/FormAdmin';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/" component={ Customer } />
      <Route path="/seller/" component={ Seller } />
      <Route path="/admin/manage" component={ FormAdmin } />
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
