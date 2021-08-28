import React from 'react';
import P from 'prop-types';
import style from './primaryButton.module.scss';

const PrimaryButton = ({ children, dataTestId, isBtnDisabled }) => (
  <button
    disabled={ isBtnDisabled }
    type="button"
    data-testid={ dataTestId }
    className={ style.primaryButton }
  >
    {children}
  </button>
);

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: P.node.isRequired,
  dataTestId: P.string.isRequired,
  isBtnDisabled: P.bool,
};

PrimaryButton.defaultProps = {
  isBtnDisabled: false,
};
