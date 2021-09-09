import React from 'react';
import PropTypes from 'prop-types';

function DropDownList({ name, options, dataTestId, onChange, classStyle }) {
  return (
    <select
      name={ name }
      id={ name }
      data-testid={ dataTestId }
      onChange={ onChange }
      classStyle={ classStyle }
    >
      <option hidden value="">
        Escolha uma opção
      </option>
      {options.map((option, key) => (
        <option key={ key } value={ option }>
          {option}
        </option>
      ))}
    </select>
  );
}

DropDownList.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  classStyle: PropTypes.string.isRequired,
};

export default DropDownList;
