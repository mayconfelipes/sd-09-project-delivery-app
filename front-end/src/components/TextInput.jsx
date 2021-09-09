import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
  type, name, onChange, labelText, placeholderText, dataTestId, classStyle,
}) {
  return (
    <label htmlFor={ name } className={ classStyle }>
      { labelText }
      <input
        type={ type }
        id={ name }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholderText }
        data-testid={ dataTestId }
      />
    </label>
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  dataTestId: PropTypes.string,
  classStyle: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  placeholderText: '',
  dataTestId: ',',
  classStyle: '',
};

export default TextInput;
