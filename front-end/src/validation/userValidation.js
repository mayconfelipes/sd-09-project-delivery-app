const passwordValidation = (password) => password.length > 6;

const userNameValidation = (userName) => userName.trim().length < 12;

const emailValidation = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

module.exports = {
  passwordValidation,
  userNameValidation,
  emailValidation,
};
