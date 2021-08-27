import React from 'react';
import PropTypes from 'prop-types';
import { InputRageElement } from '../styles';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';
import Text from '../Atoms/Text';

function InputRage({ children }) {
  return (
    <InputRageElement>
      <Text>Descrição</Text>
      <Button>-</Button>
      <Input>{children}</Input>
      <Button>+</Button>
    </InputRageElement>
  );
}

InputRage.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default InputRage;
