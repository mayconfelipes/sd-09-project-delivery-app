import { useState, useEffect } from 'react';
import Joi from 'joi';

const MIN_NAME_LENGTH = 12;
const MIN_PASSWORD_LENGTH = 6;

const useRegisterInfo = () => {
  const [registerInfo, setRegisterInfo] = useState(() => ({
    userName: '', email: '', password: '',
  }));
  const [isValidInfo, setInfoValidation] = useState(() => false);

  useEffect(
    () => {
      const schema = Joi.object({
        userName: Joi.string().min(MIN_NAME_LENGTH).required(),
        email: Joi.string().email({ tlds: { allow: false } }).required(),
        password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
      });
      const { error } = schema.validate(registerInfo);
      setInfoValidation(!!error);
    }, [registerInfo],
  );

  const handleFieldsChange = ({ target: { name, value } }) => {
    setRegisterInfo((currentState) => ({ ...currentState, [name]: value }));
  };

  return [registerInfo, handleFieldsChange, isValidInfo];
};

export default useRegisterInfo;
