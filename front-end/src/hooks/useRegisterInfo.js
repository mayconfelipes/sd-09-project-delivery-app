import { useState } from 'react';

const useRegisterInfo = () => {
  const [registerInfo, setRegisterInfo] = useState(() => ({
    userName: '', email: '', password: '',
  }));
  const handleFieldsChange = ({ target: { name, value } }) => {
    setRegisterInfo((currentState) => ({ ...currentState, [name]: value }));
  };

  return [registerInfo, handleFieldsChange];
};

export default useRegisterInfo;
