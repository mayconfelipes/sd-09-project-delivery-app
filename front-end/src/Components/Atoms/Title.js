import React from 'react';
import PropTypes from 'prop-types';
import { TitleElement } from '../styles';

function Title({ children }) {
  return <TitleElement>{children}</TitleElement>;
}

Title.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Title;
