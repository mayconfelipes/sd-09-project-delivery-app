import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonText, isDisabled, onClick, dataTestId, classStyle, id }) {
  return (
    <button
      type="button"
      disabled={ isDisabled }
      onClick={ onClick }
      data-testid={ dataTestId }
      className={ classStyle }
      id={ id }
    >
      { buttonText }
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
  classStyle: PropTypes.string,
  id: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  dataTestId: '',
  classStyle: '',
  id: '',
};

export default Button;
