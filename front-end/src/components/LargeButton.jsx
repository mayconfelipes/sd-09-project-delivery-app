import React from 'react';
import PropTypes from 'prop-types';

function LargeButton({ buttonText, isDisabled, onClick, dataTestId }) {
  return (
    <button
      type="button"
      disabled={ isDisabled }
      onClick={ onClick }
      data-testid={ dataTestId }
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
};

LargeButton.defaultProps = {
  isDisabled: false,
  dataTestId: '',
};

export default LargeButton;
