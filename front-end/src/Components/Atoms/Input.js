import React from 'react';
import PropTypes from 'prop-types';
import { InputElement } from '../styles';

function Input({ children }) {
  return <InputElement value={ children } />;
}

Input.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Input;
