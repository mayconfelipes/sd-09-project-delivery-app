import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <ul className="navbar-customer-container">
        <div className="client-options">
          <Link to="/customer/products">
            <li data-testid="customer_products__element-navbar-link-products">
              PRODUTOS
            </li>
          </Link>
          <Link to="/customer/orders">
            <li
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS
            </li>
          </Link>
        </div>
        <div className="info-customer">
          <Link to="/customer/products">
            <li
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { name }
            </li>
          </Link>
          <Link to="/login">
            <button
              type="button"
              onClick={ () => localStorage.clear() }
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </button>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
