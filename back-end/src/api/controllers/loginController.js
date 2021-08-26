const logins = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await logins.login({ email, password });
    return res.status(200).json(result);
  } catch (error) {
      if (error.type === 'BAD_REQUEST') error.status = 400;
    next(error);
  }
};

module.exports = {
  login,
};
