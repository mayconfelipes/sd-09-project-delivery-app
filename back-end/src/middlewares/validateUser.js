const { User } = require('../database/models/user');

const validateUser = async (req, _res, next) => {
  const { name, email  } = req.body;

  const nameUser = await User.findOne({ where: { name }});
  const emailUser = await User.findOne({ where: { email }});

  if(nameUser || emailUser) {
    return next({ Status: 409, message: 'User already registered'});
    }
    return next();
};

module.exports =  validateUser;
