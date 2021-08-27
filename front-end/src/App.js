import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route path="/login" exact component={ Login } />
        <Route path="/" exact component={ Login } />
        {/* <Route path="" exact component={ NotFound } /> */}
      </Switch>
    </Router>
  );
}

export default App;
