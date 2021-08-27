import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from '../styles';

function Button({ children }) {
  return <ButtonElement color="green">{children}</ButtonElement>;
}

Button.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Button;
