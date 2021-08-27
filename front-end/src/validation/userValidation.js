const passwordMinLength = 6;
const userNameMaxLength = 12;
const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

const passwordValidation = (password) => password.length > passwordMinLength;

const userNameValidation = (userName) => userName.trim().length < userNameMaxLength;

const emailValidation = (email) => emailRegex.test(email);

module.exports = {
  passwordValidation,
  userNameValidation,
  emailValidation,
};
