import React from 'react';
import PropTypes from 'prop-types';

const inputStyle = {
  backgroundColor: '#2D303E',
  padding: '14px',
  borderRadius: '8px',
  border: '1px solid #393C49',
  marginBottom: '15px',
  color: '#E0E6E9',
};

function Input({ name, placeholder, inputType }) {
  return (
    <input
      type={ inputType }
      style={ inputStyle }
      name={ name }
      id={ name }
      placeholder={ placeholder }
    />
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.bool.isRequired,
};

export default Input;
