import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LinkNavbar from './LinkNavbar';
import {
  removeUserDataLocalStorage,
  getNameLocalStorage,
  removeCarrinhoLocalStorage,
} from '../utils/storage';
import Button from './Button';

const Navbar = ({ role }) => {
  const [isLogout, setIsLogout] = useState(false);

  if (isLogout) {
    removeUserDataLocalStorage();
    removeCarrinhoLocalStorage();
    return <Redirect to="/login" />;
  }

  return (
    <nav className="navbar">
      <div className="nav-display-flex">
        {role === 'customer' && (
          <LinkNavbar
            dataTestId="customer_products__element-navbar-link-products"
            text="PRODUTOS"
            classStyle="navbar-link navbar-link-green"
            to="/customer/products"
          />
        )}
        <LinkNavbar
          dataTestId="customer_products__element-navbar-link-orders"
          text="MEUS PEDIDOS"
          classStyle="navbar-link navbar-link-green"
          to={ `/${role}/orders` }
        />
      </div>
      <div className="nav-display-flex">
        <div
          data-testid="customer_products__element-navbar-user-full-name"
          className="navbar-link navbar-link-purple"
        >
          {getNameLocalStorage()}
        </div>
        <Button
          dataTestId="customer_products__element-navbar-link-logout"
          buttonText="Sair"
          classStyle="navbar-link navbar-link-blue"
          onClick={ () => setIsLogout(true) }
        />
      </div>
    </nav>);
};

Navbar.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Navbar;
