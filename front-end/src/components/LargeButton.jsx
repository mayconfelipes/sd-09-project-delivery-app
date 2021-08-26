import React from 'react';
import PropTypes from 'prop-types';

function LargeButton({ buttonText, isDisabled, onClick }) {
  return (
    <button
      type="button"
      disabled={ isDisabled }
      onClick={ onClick }
    >
      { buttonText }
    </button>
  );
}

LargeButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

LargeButton.defaultProps = {
  isDisabled: false,
};

export default LargeButton;
