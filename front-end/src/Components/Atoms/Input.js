import React from 'react';
import PropTypes from 'prop-types';
import { InputElement } from '../styles';

function Input({ children: { name, placeholder, inputType, testId, onChange } }) {
  return (
    <InputElement
      type={ inputType }
      name={ name }
      id={ name }
      placeholder={ placeholder }
      data-testid={ testId }
      onChange={ onChange }
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.bool,
}.isRequired;

export default Input;
