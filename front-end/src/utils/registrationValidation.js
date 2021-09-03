const isValid = ({ name, email, password }) => {
  const NAME_MIN_LENGTH = 12;
  const PASSWORD_MIN_LENGTH = 6;
  const EMAIL_REGEX = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/igm;

  const isValidName = name.length >= NAME_MIN_LENGTH;
  const isValidPassword = password.length >= PASSWORD_MIN_LENGTH;
  const isValidEmail = EMAIL_REGEX.test(email);

  return isValidName && isValidPassword && isValidEmail;
};

export default {
  isValid,
};
