const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const loginVerify = require('../service/utils/loginSchema');
const loginService = require('../service/Login');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const login = rescue(async (req, res, next) => {
    console.log(req.body);
    const { error } = loginVerify.validate(req.body);
    if (error) {
       return next(error);
    }
   const { email, name, role } = await loginService.login({ ...req.body });
   const payload = { email };
   const token = jwt.sign(payload, secret);
    
    return res.status(200).json({ token, name, role, email });
});

module.exports = { login };
