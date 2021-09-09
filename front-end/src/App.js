import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/login';
import Register from './pages/register';
import Products from './pages/customerProducts';
import CheckOut from './pages/customerCheckout';
import Order from './pages/customerOrder';
import CustomerOrderDetails from './pages/customerOrderDetails';
import SellerOrders from './pages/sellerOrders';
import SellerOrderDetails from './pages/sellerOrderDetails';
import AdminManage from './pages/adminManage';
import GlobalStyle from './theme/globalStyle';
import Context from './context/index';

function App() {
  const { theme } = useContext(Context);
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/admin/manage" component={ AdminManage } />
          <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
          <Route path="/seller/orders" component={ SellerOrders } />
          <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
          <Route path="/customer/orders/" component={ Order } />
          <Route path="/customer/checkout" component={ CheckOut } />
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
