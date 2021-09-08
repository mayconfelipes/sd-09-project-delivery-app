import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const prefix = 'customer_products__element-navbar-';
  const userInfo = JSON.parse(localStorage.getItem('user'));
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-items">
          <Link
            className="navbar-links"
            data-testid={ `${prefix}link-products` }
            to="/customer/products"
          >
            Produtos
          </Link>
        </div>
        <div className="navbar-items">
          <Link
            className="navbar-links"
            data-testid={ `${prefix}link-orders` }
            to="/customer/orders"
          >
            Meus pedidos
          </Link>
        </div>
        <div
          className="navbar-items"
          data-testid={ `${prefix}user-full-name` }
        >
          {userInfo.name}
        </div>
        <button
          className="navbar-logout-button"
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
      </div>
    </nav>
  );
};

export default NavBar;
