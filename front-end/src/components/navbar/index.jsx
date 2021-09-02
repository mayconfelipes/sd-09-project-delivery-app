import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ abas, user }) => (
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
    >
      Sair
    </button>

  </nav>
);

Navbar.propTypes = {
  abas: PropTypes.node.isRequired,
  user: PropTypes.string.isRequired,
};

export default Navbar;
