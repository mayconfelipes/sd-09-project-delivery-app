import React from 'react';
import P from 'prop-types';
import style from './primaryButton.module.scss';

const PrimaryButton = ({ children, dataTestId, isBtnDisabled, onLoginClick }) => (
  <button
    disabled={ isBtnDisabled }
    type="button"
    data-testid={ dataTestId }
    className={ style.primaryButton }
    onClick={ onLoginClick }
  >
    {children}
  </button>
);

export default PrimaryButton;

PrimaryButton.propTypes = {
  children: P.node.isRequired,
  dataTestId: P.string,
  isBtnDisabled: P.bool,
  onLoginClick: P.func,
};

PrimaryButton.defaultProps = {
  isBtnDisabled: false,
  onLoginClick: () => {},
  dataTestId: '',
};
