const checkName = (name) => /^[a-zA-ZÀ-ü ]{12}/g.test(name);
const checkEmail = (email) => /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email);
const checkPassword = (password) => /[\w\D]{6}/g.test(password);

export const checkLogin = ({ email, password }) => (
  checkEmail(email) && checkPassword(password));

export const checkUser = ({ name, email, password }) => (
  checkName(name) && checkEmail(email) && checkPassword(password));
