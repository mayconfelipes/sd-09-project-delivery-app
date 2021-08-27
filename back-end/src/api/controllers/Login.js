const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const loginVerify = require('../service/utils/loginSchema');
const loginService = require('../service/Login');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const login = rescue(async (req, res, next) => {
    const { error } = loginVerify.validate(req.body);
    if (error) {
       return next(error);
    }
   const { email, password } = await loginService.login({ ...req.body });
   const payload = { email, password };
   const token = jwt.sign(payload, secret);
    
   // return res.status(200).json(result);
    return res.status(200).json({ message: token });
});

module.exports = { login };
