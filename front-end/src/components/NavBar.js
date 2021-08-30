import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavBar.css';

function NavBar(props) {
  const { userType, userName } = props;
  const history = useHistory();
  let prefix = '';
  console.log(prefix);

  if (userType === 'customer') {
    prefix = 'customer_products__';
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
              <button
                type="button"
                onClick={ () => history.push('/customer/products') }
                data-testid="customer_products__element-navbar-link-products"
              >
                Produtos
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={ () => history.push('/customer/orders') }
                data-testid="customer_products__element-navbar-link-orders"
              >
                Meus pedidos
              </button>
            </li>
          </>
        ) }
        { userType === 'seller' && (
          <li>
            <button
              type="button"
              onClick={ () => history.push('/seller/orders') }
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus pedidos
            </button>
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
        <div className="flexRigth">

          <li
            className="nav-name"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { userName }
          </li>
          <li>
            <a
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
