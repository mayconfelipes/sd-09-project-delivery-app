const users = require('../services/userService');

const findAll = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const result = await users.findAll(authorization);
    return res.status(200).json(result);
  } catch (error) {
      if (error.type === 'UNAUTHORIZED') error.status = 401;
    next(error);
  }
};

module.exports = {
  findAll,
};
