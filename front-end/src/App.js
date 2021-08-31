import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/customerProducts';
import GlobalStyle from './theme/globalStyle';
import Context from './context/index';

function App() {
  const { theme } = useContext(Context);
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/customer/products" component={ Products } />
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
