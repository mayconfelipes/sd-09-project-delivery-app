import React from 'react';
import PropTypes from 'prop-types';
import { InputTextElement } from '../styles';
import Input from '../Atoms/Input';
import Text from '../Atoms/Text';

function InputText({ children }) {
  return (
    <InputTextElement>
      <Text>-</Text>
      <Input>{children}</Input>
    </InputTextElement>
  );
}

InputText.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default InputText;
