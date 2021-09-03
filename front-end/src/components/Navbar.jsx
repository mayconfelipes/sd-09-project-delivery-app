import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useLocation } from 'react-router-dom';
import LinkNavbar from './LinkNavbar';
import {
  removeUserDataLocalStorage,
  getNameLocalStorage,
  removeCarrinhoLocalStorage,
} from '../utils/storage';
import Button from './Button';
import AppContext from '../context/AppContext';
import testid from '../utils/dataTestIds';

const Navbar = ({ role }) => {
  const [isLogout, setIsLogout] = useState(false);
  const { setTotalCart } = useContext(AppContext);
  const location = useLocation();

  const fildsByRole = {
    customer: {
      option1: 'MEUS PEDIDOS',
      link: '/customer/orders',
    },
    seller: {
      option1: 'PEDIDOS',
      link: '/seller/orders',
    },
    administrator: {
      option1: 'GERENCIAR USUÁRIOS',
      link: '/admin/manage',
    },
  };

  if (isLogout) {
    removeUserDataLocalStorage();
    removeCarrinhoLocalStorage();
    setTotalCart('0,00');

    return <Redirect to="/login" />;
  }

  return (
    <nav className="navbar">
      <div className="nav-display-flex">
        {role === 'customer' && (
          <LinkNavbar
            dataTestId={ testid[11] }
            text="PRODUTOS"
            classStyle={ `navbar-link ${
              location.pathname === '/customer/products'
                ? 'navbar-link-active'
                : 'navbar-link-green'
            } ` }
            to="/customer/products"
          />
        )}

        <LinkNavbar
          dataTestId={ testid[12] }
          text={ `${fildsByRole[role].option1}` }
          classStyle={ `navbar-link ${
            location.pathname === fildsByRole[role].link
              ? 'navbar-link-active'
              : 'navbar-link-green'
          } ` }
          to={ `${fildsByRole[role].link}` }
        />
      </div>
      <div className="nav-display-flex">
        <div
          data-testid={ testid[13] }
          className="navbar-link navbar-link-purple"
        >
          {role === 'administrator'
            ? 'DeliveryApp Admin'
            : getNameLocalStorage()}
        </div>
        <Button
          dataTestId={ testid[14] }
          buttonText="Sair"
          classStyle="navbar-link navbar-link-blue"
          onClick={ () => setIsLogout(true) }
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Navbar;
