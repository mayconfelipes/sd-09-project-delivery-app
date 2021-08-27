const adminService = require('../services/adminService');

const registerUser = async (req, res, next) => {
  const { body: { nome, email, password, role } } = req;
  const result = await adminService.registerUser({ nome, email, password, role });
  
  if (result.error) {
    return next(result.error);
  }

  return res.status(201).json(result);
};

module.exports = {
  registerUser,
};
