import React from 'react';
import LinkNavbar from './LinkNavbar';

const NavBar = () => (
  <nav className="navbar">
    <div>
      <LinkNavbar
        dataTestId="customer_products__element-navbar-link-products"
        text="PRODUTOS"
        classStyle="navbar-link navbar-link-green"
        to="/customer/products"
      />
      <LinkNavbar
        dataTestId="customer_products__element-navbar-link-orders"
        text="MEUS PEDIDOS"
        classStyle="navbar-link navbar-link-green"
        to="/customer/checkout"
      />
    </div>
    <div>
      <LinkNavbar
        dataTestId="customer_products__element-navbar-user-full-name"
        text="FuncaoPegalocalStorage"
        classStyle="navbar-link navbar-link-purple"
      />
      <LinkNavbar
        dataTestId="customer_products__element-navbar-link-logout"
        text="Sair"
        classStyle="navbar-link navbar-link-blue"
        to="/"
      />
    </div>
  </nav>
);

export default NavBar;
