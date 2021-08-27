import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const NavBar = () => (
  <nav className="navbar">
    <div>
      <Link to="/customer/products">
        <Button
          dataTestId="customer_products__element-navbar-link-products"
          buttonText="PRODUTOS"
          classStyle="btn btn-green"
        />
      </Link>
      <Link to="/customer/checkout">
        <Button
          dataTestId="customer_products__element-navbar-link-orders"
          buttonText="MEUS PEDIDOS"
          classStyle="btn btn-green"
        />
      </Link>
    </div>
    <div>
      <Button
        dataTestId="customer_products__element-navbar-user-full-name"
        buttonText="FuncaoPegalocalStorage"
        classStyle="btn btn-purple"
      />
      <Link to="/">
        <Button
          dataTestId="customer_products__element-navbar-link-logout"
          buttonText="Sair"
          classStyle="btn btn-blue"
        />
      </Link>
    </div>
  </nav>
);

export default NavBar;
