import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav data-testid="customer_products__element-navbar-link-products">
    <ul>
      <Link to="/customer/products">
        <li>PRODUTOS</li>
      </Link>
      <Link to="/customer/orders">
        <li>MEUS PEDIDOS</li>
      </Link>
      <Link to="/register">
        <li>test</li>
      </Link>
      <Link to="/login">
        <li>Sair</li>
      </Link>
    </ul>
  </nav>
);

export default NavBar;
