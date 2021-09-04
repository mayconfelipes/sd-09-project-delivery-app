import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarSeller.css';

const NavBarSeller = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  console.log(localStorage.getItem('user'));

  return (
    <nav>
      <ul className="navbar-seller-container">
        <Link to="/seller/orders">
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            PEDIDOS
          </li>
        </Link>
        <div>
          <Link to="/login">
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

export default NavBarSeller;
