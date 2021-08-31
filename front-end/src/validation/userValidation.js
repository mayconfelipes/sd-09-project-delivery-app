const passwordMinLength = 6;
const userNameMinLength = 12;
const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const passwordValidation = (password) => password.length >= passwordMinLength;

const userNameValidation = (userName) => userName.length >= userNameMinLength
  && userName !== '';

const emailValidation = (email) => emailRegex.test(email);

const validationForLogin = ({ password, login }) => {
  const isPasswordValid = passwordValidation(password);
  const isEmailValid = emailValidation(login);
  if (isPasswordValid && isEmailValid) {
    return true;
  }

  return false;
};

module.exports = {
  passwordValidation,
  userNameValidation,
  emailValidation,
  validationForLogin,
};
