const formValidator = (email, password, name) => {
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const minNameLenght = 12;
  const minPasswordLenght = 6;

  if (
    (name !== undefined && name.length < minNameLenght)
    || !emailRegex.test(email)
    || password.length < minPasswordLenght
  ) return false;

  return true;
};

export default formValidator;
