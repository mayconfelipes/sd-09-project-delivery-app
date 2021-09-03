import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ name }) {
  const clearStorage = () => { localStorage.user = ''; };

  return (
    <nav>
      <p>PEDIDOS</p>
      <p>{ name }</p>
      <a href="/" onClick={ clearStorage }>
        Sair
      </a>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
