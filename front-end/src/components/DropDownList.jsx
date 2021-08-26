import React from 'react';
import PropTypes from 'prop-types';

function DropDownList({ options, dataTestId }) {
  return (
    <select data-testid={ dataTestId }>
      <option value="">Escolha uma opção</option>
      { options.map((option, key) => (
        <option
          key={ key }
          value={ option }
        >
          { option }
        </option>
      )) }
    </select>
  );
}

DropDownList.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropDownList;
