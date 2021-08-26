import React from 'react';
import P from 'prop-types';
import style from './input.module.scss';

const Input = ({ labelDescription, dataTestId }) => (
  <label htmlFor="input" className={ style.inputStyle }>
    { labelDescription }
    <input id="input" data-testid={ dataTestId } />
  </label>
);

export default Input;

Input.propTypes = {
  labelDescription: P.string.isRequired,
  dataTestId: P.string.isRequired,
};
