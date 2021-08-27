const rescue = require('express-rescue');
const loginVerify = require('../service/utils/loginSchema');
 const loginService = require('../service/Login');

const login = rescue(async (req, res, next) => {
    const { error } = loginVerify.validate(req.body);
    if (error) {
       return next(error);
    }
 const { email, password } = await loginService({ ...req.body });
   // const { email, password } = req.body;
    
   // return res.status(200).json({ message: email, text: password });
   return res.status(200).json({ message: 'OK' });
});

module.exports = { login };
