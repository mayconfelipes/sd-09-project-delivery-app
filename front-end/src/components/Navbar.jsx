import React from 'react';
import PropTypes from 'prop-types';
import LinkNavbar from './LinkNavbar';
import { getNameLocalStorage } from '../utils/storage';

const Navbar = ({ showProducts, showPedidos, showNomeCliente, showSair }) => (
  <nav className="navbar">
    <div className="nav-display-flex">
      {showProducts ? (
        <LinkNavbar
          dataTestId="customer_products__element-navbar-link-products"
          text="PRODUTOS"
          classStyle="navbar-link navbar-link-green"
          to="/customer/products"
        />
      ) : ('') }

      {showPedidos ? (
        <LinkNavbar
          dataTestId="customer_products__element-navbar-link-orders"
          text="MEUS PEDIDOS"
          classStyle="navbar-link navbar-link-green"
          to="/customer/checkout"
        />
      ) : ('') }
    </div>
    <div className="nav-display-flex">
      {showNomeCliente ? (
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className="navbar-link navbar-link-purple"
        >
          {getNameLocalStorage()}
        </div>
      ) : ('') }

      {showSair ? (
        <LinkNavbar
          dataTestId="customer_products__element-navbar-link-logout"
          text="Sair"
          classStyle="navbar-link navbar-link-blue"
          to="/"
        />
      ) : ('') }
    </div>
  </nav>
);

Navbar.propTypes = {
  showProducts: PropTypes.bool,
  showPedidos: PropTypes.bool,
  showNomeCliente: PropTypes.bool,
  showSair: PropTypes.bool,
};

Navbar.defaultProps = {
  showProducts: true,
  showPedidos: true,
  showNomeCliente: true,
  showSair: true,
};

export default Navbar;
