const { Users } = require('../../../database/models');

const validateUserExists = async (req, res, next) => {
  const { email } = req.body;
  const exists = await Users.findOne({ where: { email } });
  if (!exists) {
    return res
      .status(404)
      .json({ message: 'User does not exist' });
  }
  next();
};

module.exports = validateUserExists;
