const { UsersModel } = require('../database/models');

const validadeUserExists = async (req, res, next) => {
  const { email } = req.body;
  const exists = await UsersModel.findOne({ where: { email } });
  if (!exists) {
    return res
      .status(404);
  }
  next();
};

module.exports = validadeUserExists;