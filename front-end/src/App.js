import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/provider';
import Login from './pages/login';
import Register from './pages/register';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
