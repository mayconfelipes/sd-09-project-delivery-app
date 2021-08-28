import React from 'react';
import PropTypes from 'prop-types';
import LinkNavbar from './LinkNavbar';

const NavBar = ({
  showProducts = true,
  showPedidos = true,
  showNomeCliente = true,
  showSair = true,
}) => (
  <nav className="navbar">
    <div>
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
    <div>
      {showNomeCliente ? (
        <LinkNavbar
          dataTestId="customer_products__element-navbar-user-full-name"
          text="FuncaoPegalocalStorage"
          classStyle="navbar-link navbar-link-purple"
        />
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
NavBar.propTypes = {
  showProducts: PropTypes.bool.isRequired,
  showPedidos: PropTypes.bool.isRequired,
  showNomeCliente: PropTypes.bool.isRequired,
  showSair: PropTypes.bool.isRequired,
};

export default NavBar;
