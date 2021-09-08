import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarAdmin.css';

const NavBarAdmin = () => {
  const { name } = JSON.parse(localStorage.getItem('user'));
  console.log(localStorage.getItem('user'));

  return (
    <nav>
      <ul className="navbar-admin-container">
        <Link to="/admin/manage">
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            GERENCIAR USUARIOS
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

export default NavBarAdmin;
