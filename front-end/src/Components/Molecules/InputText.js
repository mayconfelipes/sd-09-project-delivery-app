//  Iniciando
import React from 'react';
import PropTypes from 'prop-types';
import LabelTitle from '../Atoms/LabelTitle';
import Input from '../Atoms/Input';

const inputLabelTextStyle = {
  display: 'flex',
  flexDirection: 'column',
};

function InputText(props) {
  const { name, placeholder, inputType } = props;
  return (
    <label htmlFor={ name } style={ inputLabelTextStyle }>
      <LabelTitle name={ name } />
      {Input({ name, placeholder, inputType })}
    </label>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.bool.isRequired,
};

export default InputText;
