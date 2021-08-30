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
            to="/customer/products"
            data-testid={ `${prefix}link-products` }
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="/customer/orders"
            data-testid={ `${prefix}link-orders` }
          >
            Meus pedidos
          </Link>
        </li>
        <li data-testid={ `${prefix}user-full-name` }>{userInfo.name}</li>
        <li>
          <Link
            to="/login"
            data-testid={ `${prefix}link-logout` }
          >
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
