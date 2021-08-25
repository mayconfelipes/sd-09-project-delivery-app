import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
