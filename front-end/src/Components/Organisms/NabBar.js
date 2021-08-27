import React from 'react';
import PropTypes from 'prop-types';
import { NavBarElement } from '../styles';
import Navigations from '../Molecules/Navigations';
import Button from '../Atoms/Button';

function NavBar() {
  return (
    <NavBarElement>
      <Navigations>teste</Navigations>
      <Button>Sair</Button>
    </NavBarElement>
  );
}

NavBar.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default NavBar;
