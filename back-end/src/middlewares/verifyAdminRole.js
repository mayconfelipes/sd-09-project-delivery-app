const verifyRoleAdmin = async (req, res, next) => {
  const userAdmin = req.decoded;
  if (userAdmin.role !== 'administrator') {
    res
      .status(401)
      .json({ message: 'Usuário deve ser um administrador' });
  } else {
    next();
  }
};

module.exports = verifyRoleAdmin;