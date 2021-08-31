import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  console.log(localStorage.getItem('user'));

  return (
    <nav>
      <ul>
        <Link to="/customer/products">
          <li data-testid="customer_products__element-navbar-link-products">PRODUTOS</li>
        </Link>
        <Link to="/customer/orders">
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </li>
        </Link>
        <Link to="/register">
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </li>
        </Link>
        <Link to="/login">
          <button
            type="button"
            onClick={ () => localStorage.setItem('user', '') }
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
