import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const History = useHistory();

  function handleLogout() {
    localStorage.clear();
    History.push('/login');
  }

  return (
    <div className="navBar">
      <div className="leftHeader">
        <Link
          className="noUnderline"
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
        <Link
          className="noUnderline"
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </div>
      <div className="rightHeader">
        <p data-testid="customer_products__element-navbar-user-full-name">
          { user.name || null }
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Header;
