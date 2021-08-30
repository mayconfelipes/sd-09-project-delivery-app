import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from '../styles';

function Button({ text, styleColor, testId, onClick, isDisabled }) {
  return (
    <ButtonElement
      type="button"
      styleColor={ styleColor }
      data-testid={ testId }
      onClick={ onClick }
      disabled={ isDisabled || false }
    >
      {text}
    </ButtonElement>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  styleColor: PropTypes.string,
}.isRequired;

export default Button;
