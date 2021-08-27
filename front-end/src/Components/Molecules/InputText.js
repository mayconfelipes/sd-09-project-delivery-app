import React from 'react';
import PropTypes from 'prop-types';
import { InputTextElement } from '../styles';
import Input from '../Atoms/Input';
import Text from '../Atoms/Text';

function InputText({ name, placeholder, inputType }) {
  return (
    <InputTextElement htmlFor={ name }>
      <Text>{ name }</Text>
      <Input>{ { name, placeholder, inputType } }</Input>
    </InputTextElement>
  );
}

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.bool,
}.isRequired;

export default InputText;
