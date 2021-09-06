const formValidator = (email, password, name, role) => {
  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const minNameLenght = 12;
  const minPasswordLenght = 6;
  const roleTypes = ['Administrador', 'Vendedor', 'Comprador'];

  if (
    (role && !roleTypes.includes(role))
    || (name && name.length < minNameLenght)
    || !emailRegex.test(email)
    || password.length < minPasswordLenght
  ) return false;

  return true;
};

export default formValidator;
