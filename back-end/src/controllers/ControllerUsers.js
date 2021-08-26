const ServiceUsers = require('../services/ServiceUsers');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await ServiceUsers.login({ email, password });

    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  login,
};
