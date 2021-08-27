import React from 'react';
import PropTypes from 'prop-types';
import { OptionElement } from '../styles';

function Option({ children }) {
  return <OptionElement value="">{children}</OptionElement>;
}

Option.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default Option;
