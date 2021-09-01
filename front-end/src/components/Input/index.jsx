import React from 'react';
import P from 'prop-types';
import style from './input.module.scss';

const Input = ({ labelDescription, dataTestId = '', inputName, onHandleChange }) => (
  <label htmlFor="input" className={ style.inputStyle }>
    { labelDescription }
    <input
      onChange={ onHandleChange }
      id="input"
      data-testid={ dataTestId }
      name={ inputName }
    />
  </label>
);

export default Input;

Input.propTypes = {
  labelDescription: P.string.isRequired,
  dataTestId: P.string.isRequired,
  inputName: P.string,
  onHandleChange: P.func.isRequired,
};

Input.defaultProps = {
  inputName: '',
};
