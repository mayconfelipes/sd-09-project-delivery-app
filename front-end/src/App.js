import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './components/pages/Register';
<<<<<<< HEAD
=======
import Login from './pages/Login';
>>>>>>> 550a041f3fcd046bc8b4f7f45a1f018063b2b166
import Orders from './pages/Orders';
import './App.css';
import Products from './pages/Products';
import Notfound from './pages/Notfound';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
<<<<<<< HEAD
      </Route>
      <Route path="/register" component={ Register } />
=======
      <Route path="/register" component={ Register } />
      <Route exact path="/customer/products" />
>>>>>>> 550a041f3fcd046bc8b4f7f45a1f018063b2b166
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" />
      <Route exact path="/customer/orders/:id" />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route path="/seller/orders" />
      <Route path="/admin/manager" />
      <Route component={ Notfound } />
    </Switch>
  );
}

export default App;
