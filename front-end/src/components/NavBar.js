import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  const { userType, userName } = props;
  let prefix = '';
  console.log(userType, userName);
  console.log(prefix);

  if (userType === 'customer') {
    prefix = 'customer_products__';
    console.log(prefix);
  }

  if (userType === 'seller') {
    prefix = 'seller_orders__';
  }

  if (userType === 'admin') {
    prefix = 'admin_manage__';
  }

  return (
    <header>
      <ul>
        { userType === 'customer' && (
          <>
            <li>
              <Link
                to="/customer/products"
                data-testid="customer_products__element-navbar-link-products"
              >
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/customer/orders"
                data-testid="customer_products__element-navbar-link-orders"
              >
                Meus pedidos
              </Link>
            </li>
          </>
        ) }
        { userType === 'seller' && (
          <li className="pedidos-navbar">
            <Link
              to="/seller/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Pedidos
            </Link>
          </li>
        ) }
        { userType === 'admin' && (
          <li>
            <a
              href="/admin/manage"
              data-testid="customer_products__element-navbar-link-manage"
            >
              Gerenciar usuários
            </a>
          </li>
        ) }
        <div className="user-navbar">
          <li
            className="username-navbar username"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { userName }
          </li>
          <li className="logout-navbar">
            <a
              className="logout"
              id="logout"
              href="/login"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => localStorage.clear() }
            >
              Sair
            </a>
          </li>
        </div>
      </ul>
    </header>
  );
}

NavBar.propTypes = {
  userType: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default NavBar;
