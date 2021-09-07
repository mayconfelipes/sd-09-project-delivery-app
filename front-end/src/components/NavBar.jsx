import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const prefix = 'customer_products__element-navbar-';
  const userInfo = JSON.parse(localStorage.getItem('user'));
  return (
    <nav>
      <ul>
        <li>
          <Link
            data-testid={ `${prefix}link-products` }
            to="/customer/products"
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            data-testid={ `${prefix}link-orders` }
            to="/customer/orders"
          >
            Meus pedidos
          </Link>
        </li>
        <li data-testid={ `${prefix}user-full-name` }>{userInfo.name}</li>
        <button
          data-testid={ `${prefix}link-logout` }
          onClick={ () => localStorage.removeItem('user') }
          type="button"
        >
          <Link
            to="/login"
          >
            Sair
          </Link>
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
