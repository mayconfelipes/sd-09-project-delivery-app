import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from '../styles';

function Button({ text, styleColor }) {
  return <ButtonElement type="button" styleColor={ styleColor }>{text}</ButtonElement>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styleColor: PropTypes.string.isRequired,
}.isRequired;

export default Button;
