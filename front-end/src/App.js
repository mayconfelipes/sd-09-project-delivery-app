import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { LoginProvider } from './context/loginContext';
import Login from './pages/Login';
import Products from './pages/Products';
import Admin from './pages/Admin';
//  import rockGlass from './images/rockGlass.svg';
import Register from './pages/Register';

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <Switch>
          <Route path="/admin/manage" component={ Admin } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route
            exact
            path="/"
            render={ () => (<Redirect to="/login" />) }
          />
        </Switch>

        {/* <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object> */}
      </div>
    </LoginProvider>
  );
}

export default App;
