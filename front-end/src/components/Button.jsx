import React from 'react';
import PropTypes from 'prop-types';

function Button({
  buttonText,
  isDisabled,
  onClick,
  dataTestId,
  classStyle,
  id,
  src,
  alt,
  classStyleImage,
}) {
  return (
    <button
      type="button"
      disabled={ isDisabled }
      onClick={ onClick }
      data-testid={ dataTestId }
      className={ classStyle }
      id={ id }
    >
      {src !== '' && alt !== '' && (
        <img src={ src } alt={ alt } className={ classStyleImage } />
      ) }

      {buttonText}
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
  src: PropTypes.string,
  alt: PropTypes.string,
  classStyleImage: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
  dataTestId: '',
  classStyle: '',
  id: '',
  src: '',
  alt: '',
  classStyleImage: '',
};

export default Button;
