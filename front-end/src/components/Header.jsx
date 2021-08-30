import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from './button';
import '../styles/header.css';

const Header = () => {
  const [userLogged, setUserLogged] = useState(false);
  const userData = JSON.parse(localStorage.getItem('user'));
  const handleClick = () => {
    localStorage.removeItem('user');
    setUserLogged(true);
  };

  if (userLogged) return <Redirect to="/login" />;
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
        onClick={ () => handleClick() }
      />
    </header>
  );
};

export default Header;
