import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, ...rest }) => (
  <button type="button" { ...rest }>
    { name }
  </button>
);

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
