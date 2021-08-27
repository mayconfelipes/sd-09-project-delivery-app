const validToken = require('../services/tokenValidService');

const checkUser = async (req, res, next) => {
  try {
    const noPass = await validToken(req.headers.authorization);
    req.user = noPass;
    return next();
  } catch (error) {
    return next(error);
  }
};

const checkUserAdmin = async (req, res, next) => {
  try {
    const noPass = await validToken(req.headers.authorization);
    const { role } = noPass;
    const offRule = { status: 401, message: 'Unauthorized' };
    if (role !== 'administrator') { throw offRule; }
    req.user = noPass;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  checkUser,
  checkUserAdmin,
};
