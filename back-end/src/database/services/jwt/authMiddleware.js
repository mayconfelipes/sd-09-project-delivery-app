const { verify } = require('./jwt');
const { user: User } = require('../../models');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const payload = await verify(token);

    await User.findOne({ where: { email: payload.email } });
    req.payload = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};