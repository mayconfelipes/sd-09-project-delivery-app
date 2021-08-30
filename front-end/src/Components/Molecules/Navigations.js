import React from 'react';
import PropTypes from 'prop-types';
import { NavigationsElement } from '../styles';
import ListLink from '../Atoms/LinkList';

function Navigations({ links }) {
  return (
    <NavigationsElement>
      {links && links.map(({ text, url }, index) => (
        <ListLink
          key={ `navbar-${index}` }
          text={ text }
          url={ url }
        />

      ))}
    </NavigationsElement>
  );
}

Navigations.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Navigations;
