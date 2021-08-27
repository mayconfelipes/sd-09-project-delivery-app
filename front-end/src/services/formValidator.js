const formValidator = (email, password, name) => {
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  const minNameLenght = 12;
  const minPasswordLenght = 6;

  if (name === undefined) {
    console.log('lint');
    if (!emailRegex.test(email)
    || password.length < minPasswordLenght) {
      return false;
    }
  }

  if (
    (name && name.length < minNameLenght)
    || !emailRegex.test(email)
    || password.length < minPasswordLenght
  ) return false;

  return true;
};

export default formValidator;
