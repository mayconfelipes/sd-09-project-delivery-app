import React, { useContext } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/login';
import Register from './pages/register';
import GlobalStyle from './theme/globalStyle';
import Context from './context/index';

function App() {
  const { theme } = useContext(Context);
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={ Register } />
          <Route path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
