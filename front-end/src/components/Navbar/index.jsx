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
        <br />
        <br />
        <Link to="/customer/orders">
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </li>
        </Link>
        <br />
        <br />
        <br />
        <Link to="/customer/products">
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name }
          </li>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <Link to="/login">
          <button
            type="button"
            onClick={ () => localStorage.clear() }
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
