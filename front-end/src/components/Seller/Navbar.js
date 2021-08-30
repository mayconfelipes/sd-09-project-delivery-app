import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ name }) {
  return (
    <nav>
      <p>PEDIDOS</p>
      <p>{ name }</p>
      <p>Sair</p>
    </nav>
  );
}

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Navbar;
