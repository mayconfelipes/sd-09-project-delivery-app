import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/navBarCustomer.css';

function NavBarCustomer(props) {
  const { textProp } = props;

  const getUserName = () => {
    const userName = JSON.parse(localStorage.getItem('user')) || '';
    if (userName) {
      return userName.name;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
  };

  function setOrders() {
    if (
      textProp === 'produtos'
      || textProp === 'pedidos'
      || textProp === 'checkout'
      || textProp === 'detalhes'
    ) {
      return (
        <div className="navbar_pedidos">
          <Link
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </Link>
        </div>
      );
    }
  }

  function setNavbar() {
    return (
      <nav className="navbar">
        <div className="left_side">
          <div
            className="navbar_produtos"
          >
            <Link
              data-testid="customer_products__element-navbar-link-products"
              to="/customer/products"
            >
              PRODUTOS
            </Link>
          </div>

          { setOrders() }

        </div>

        <div className="right_side">
          <div
            className="navbar_nome"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { getUserName() }
          </div>

          <div className="navbar_sair">
            <Link
              to="/login"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => logout() }
            >
              Sair
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      { setNavbar() }
    </>
  );
}

NavBarCustomer.propTypes = {
  textProp: PropTypes.string.isRequired,
};

export default NavBarCustomer;
