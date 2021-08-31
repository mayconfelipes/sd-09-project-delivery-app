import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ data, testid }) => (
  <button type="button" data-testid={ testid }>{ data }</button>
);

export default Button;

Button.propTypes = {
  data: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
