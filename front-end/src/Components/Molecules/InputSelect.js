import React from 'react';
import PropTypes from 'prop-types';
import { InputSelectElement } from '../styles';
import Option from '../Atoms/Option';
import Text from '../Atoms/Text';

function InputSelect({ children }) {
  return (
    <InputSelectElement>
      <Text>-</Text>
      <select name="" id="">
        <Option>{children}</Option>
      </select>
    </InputSelectElement>
  );
}

InputSelect.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default InputSelect;
