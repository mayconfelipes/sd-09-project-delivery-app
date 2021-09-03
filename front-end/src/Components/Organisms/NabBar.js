import React from 'react';
import PropTypes from 'prop-types';
import { NavBarElement } from '../styles';
import Navigations from '../Molecules/Navigations';
import Button from '../Atoms/Button';
import Text from '../Atoms/Text';

function NavBar({ links, user }) {
  return (
    <NavBarElement>
      <Navigations links={ links } />
      <Text>{user}</Text>
      <Button
        text="Sair"
        styleColor="purple"
      />
    </NavBarElement>
  );
}

NavBar.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default NavBar;
