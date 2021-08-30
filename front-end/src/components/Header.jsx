import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import '../styles/header.css';

const Header = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <header className="header">
      <nav className="headerNav">
        <ul className="headerList">
          <li data-testid="customer_products__element-navbar-link-products">
            <Link to="/customer/products">Produtos</Link>
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            <Link to="/customer/orders">Meus pedidos</Link>
          </li>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { userData.name }
          </li>
        </ul>
      </nav>
      <Button
        name="Sair"
        data-testid="customer_products__element-navbar-link-logout"
      />
    </header>
  );
};

export default Header;
