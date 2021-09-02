import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Navbar = ({ abas, user }) => {
  const [redirect, setRediret] = useState(false);

  const logOut = () => {
    localStorage.clear();
    setRediret(true);
  };

  return (
    <nav>
      {abas.map((aba) => (
        <a
          data-testid={ aba.split('/')[1] }
          key={ aba }
          href="##"
        >
          { aba.split('/')[0] }
        </a>))}
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user }
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logOut }
      >
        Sair
      </button>
      { redirect && <Redirect to="/" /> }
    </nav>
  );
};

Navbar.propTypes = {
  abas: PropTypes.node.isRequired,
  user: PropTypes.string.isRequired,
};

export default Navbar;
