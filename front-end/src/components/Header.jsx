import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/header.css';
import Context from '../context/ProductsContext';

const Header = () => {
  const { clearCart } = useContext(Context);

  const [userLogout, setUserLogout] = useState(false);
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));

  const renderCommonElement = (role) => {
    const options = {
      customer: <Link to="/customer/orders">Meus pedidos</Link>,
      seller: <Link to="/seller/orders">Pedidos</Link>,
      administrator: 'Gerenciar usuários',
    };

    return options[role];
  };

  const cleanUp = () => {
    clearCart();
    localStorage.clear();
    setUserLogout(true);
  };

  if (!userData) cleanUp();

  if (userLogout) return <Redirect to="/login" />;
  return (
    <header className="header">
      <nav className="headerNav">
        <ul className="headerList">
          {
            userData.role === 'customer'
            && (
              <li data-testid="customer_products__element-navbar-link-products">
                <Link to="/customer/products">Produtos</Link>
              </li>
            )
          }
          <li data-testid="customer_products__element-navbar-link-orders">
            { renderCommonElement(userData.role) }

          </li>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { userData.name }
          </li>
        </ul>
      </nav>
      <button
        type="button"
        name="Sair"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ cleanUp }
      >
        Sair
      </button>
    </header>
  );
};

export default Header;
