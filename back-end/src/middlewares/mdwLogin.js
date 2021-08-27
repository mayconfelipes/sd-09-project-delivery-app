const LoginService = require('../services/login');
const statusCode = require('../utils/statusCode');


const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const getToken = await LoginService.userLogin(email, password);
      const userIsValid = await users.findOne({ where: { email, password } });
      if (!userIsValid) {
        return res
        .status(statusCode.badRequest)
        .json({ message: 'Invalid fields' });
      }
      return res
      .status(statusCode.OK)
      .json({ token: getToken });
    } catch (err) {
      return res
      .status(statusCode.badRequest)
      .json({ message: err.message });
    }
  };

module.exports = {
  userLogin
};