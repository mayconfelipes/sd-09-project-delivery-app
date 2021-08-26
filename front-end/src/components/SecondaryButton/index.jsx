import React from 'react';
import P from 'prop-types';
import style from './secondaryButton.module.scss';

const SecondaryButton = ({ children }) => (
  <button type="button" className={ style.secondaryButton }>{children}</button>
);

export default SecondaryButton;

SecondaryButton.propTypes = {
  children: P.node.isRequired,
};
