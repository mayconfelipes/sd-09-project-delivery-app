import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Register, AdminManage, SellerOrders, SellerOrdersDetails,
  CustomerCheckout, CustomerOrders, CustomerOrdersDetails, CustomerProducts,
} from './pages';
import './App.css';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    // <div className="App">
    //   <span className="logo">TRYBE</span>
    //   <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
    //     Glass
    //   </object>
    // </div>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route exact path="/customer/orders:id" component={ CustomerOrdersDetails } />
      <Route path="/customer/orders" component={ CustomerOrders } />
      <Route exact path="/seller/orders:id" component={ SellerOrdersDetails } />
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route path="/admin/manage" component={ AdminManage } />
    </Switch>
  );
}

export default App;
