import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register, AdminManage, SellerOrders, SellerOrdersDetails,
  CustomerCheckout, CustomerOrders, CustomerOrdersDetails, CustomerProducts,
} from './pages';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        {/* <Route exact path="/">
          <Redirect to="/login" />
        </Route> */}
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrdersDetails } />
        <Route path="/customer/orders" component={ CustomerOrders } />
        <Route exact path="/seller/orders/:id" component={ SellerOrdersDetails } />
        <Route path="/seller/orders" component={ SellerOrders } />
        <Route path="/admin/manage" component={ AdminManage } />
      </Switch>
    </>
  );
}

export default App;
