const registerService = require('../services/registerService');

const createUser = async (req, res, next) => {
  try {
    const newUser = await registerService.newUser(req.body);
  return res.status(201).json(newUser);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
};
