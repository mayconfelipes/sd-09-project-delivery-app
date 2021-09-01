import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginProvider } from './context/loginContext';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <Switch>
          <Route path="/produtos" component={ Login } />
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
