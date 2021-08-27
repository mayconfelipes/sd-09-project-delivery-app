import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Products from './Pages/Products';

import './App.css';
import Button from './Components/Atoms/Button';
import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <>
      <Switch>
        <Route path="/products" component={ Products } />
      </Switch>

      <div className="App">
        <span className="logo">TRYBE</span>
        <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>

        <Link to="/products">
          <Button>Components</Button>
        </Link>
      </div>
    </>
  );
}

export default App;
