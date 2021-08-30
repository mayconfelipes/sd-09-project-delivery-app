const validateEmail = (email) => {
  const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

  return !!isValid;
};

export default validateEmail;
