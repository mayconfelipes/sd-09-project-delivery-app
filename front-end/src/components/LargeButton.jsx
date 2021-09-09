import React from 'react';
import PropTypes from 'prop-types';

function LargeButton({ buttonText, isDisabled, onClick, dataTestId, classStyle }) {
  return (
    <button
      type="button"
      disabled={ isDisabled }
      onClick={ onClick }
      data-testid={ dataTestId }
      className={ classStyle }
    >
      { buttonText }
    </button>
  );
}

LargeButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
  classStyle: PropTypes.string,
};

LargeButton.defaultProps = {
  isDisabled: false,
  dataTestId: '',
  classStyle: '',
};

export default LargeButton;
