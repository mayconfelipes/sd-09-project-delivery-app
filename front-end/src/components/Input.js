import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, name, label, onChange, value, datatestid, placeholder }) => (
  <label htmlFor={ name }>
    { label }
    <input
      id={ id }
      name={ name }
      onChange={ onChange }
      value={ value }
      data-testid={ datatestid }
      placeholder={ placeholder }
    />
  </label>
);

Input.propTypes = {
  datatestid: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  label: '',
  value: '',
  name: '',
  id: '',
  onChange: null,
};

export default Input;
