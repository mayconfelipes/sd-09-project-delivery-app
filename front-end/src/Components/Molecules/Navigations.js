import React from 'react';
import PropTypes from 'prop-types';
import { NavigationsElement } from '../styles';
import ListLink from '../Atoms/LinkList';

function Navigations({ children }) {
  return (
    <NavigationsElement>
      <ListLink>{children}</ListLink>
      <ListLink>{children}</ListLink>
      <ListLink>{children}</ListLink>
    </NavigationsElement>
  );
}

Navigations.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Navigations;
