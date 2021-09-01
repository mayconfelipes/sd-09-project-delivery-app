import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LinkNavbar from './LinkNavbar';
import {
  removeUserDataLocalStorage,
  getNameLocalStorage,
  removeCarrinhoLocalStorage,
} from '../utils/storage';
import Button from './Button';
import AppContext from '../context/AppContext';

const Navbar = ({ role }) => {
  const [isLogout, setIsLogout] = useState(false);
  const { setTotalCart } = useContext(AppContext);

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
            classStyle="navbar-link navbar-link-green"
            to="/customer/products"
          />
        )}
        <LinkNavbar
          dataTestId={ testid[12] }
          text="MEUS PEDIDOS"
          classStyle="navbar-link navbar-link-green"
          to={ `/${role}/orders` }
        />
      </div>
      <div className="nav-display-flex">
        <div
          data-testid={ testid[13] }
          className="navbar-link navbar-link-purple"
        >
          {getNameLocalStorage()}
        </div>
        <Button
          dataTestId={ testid[14] }
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
