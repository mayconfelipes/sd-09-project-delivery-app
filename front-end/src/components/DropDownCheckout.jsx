import React from 'react';
import PropTypes from 'prop-types';

function DropDownList({ name, options, dataTestId, onChange }) {
  return (
    <select name={ name } id={ name } data-testid={ dataTestId } onChange={ onChange }>
      <option hidden value="">Escolha uma opção</option>
      { options.map((option, key) => (
        <option
          key={ key }
          value={ option.id }
        >
          { option.name }
        </option>
      )) }
    </select>
  );
}

DropDownList.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropDownList;
