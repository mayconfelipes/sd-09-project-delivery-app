import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <Link to="/customer/products">
        <li data-testid="customer_products__element-navbar-link-products">PRODUTOS</li>
      </Link>
      <Link to="/customer/orders">
        <li data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</li>
      </Link>
      <Link to="/register">
        <li data-testid="customer_products__element-navbar-user-full-name">NAME</li>
      </Link>
      <Link to="/login">
        <li data-testid="customer_products__element-navbar-link-logout">Sair</li>
      </Link>
    </ul>
  </nav>
);

export default NavBar;
