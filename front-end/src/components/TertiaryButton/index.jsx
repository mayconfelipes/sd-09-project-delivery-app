import React from 'react';
import P from 'prop-types';
import style from './tertiaryButton.module.scss';

const TertiaryButton = ({ children, dataTestId }) => (
  <button
    type="button"
    data-testid={ dataTestId }
    className={ style.tertiaryButton }
  >
    {children}
  </button>
);

export default TertiaryButton;

TertiaryButton.propTypes = {
  children: P.node.isRequired,
  dataTestId: P.string.isRequired,
};
