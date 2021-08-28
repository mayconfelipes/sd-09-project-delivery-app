import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from '../styles';

function Button({ text, styleColor, testId, onClick, isDisabled }) {
  return (
    <ButtonElement
      type="button"
      styleColor={ styleColor }
      data-testId={ testId }
      onClick={ onClick }
      disabled={ isDisabled || false }
    >
      {text}
    </ButtonElement>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  styleColor: PropTypes.string.isRequired,
}.isRequired;

export default Button;
