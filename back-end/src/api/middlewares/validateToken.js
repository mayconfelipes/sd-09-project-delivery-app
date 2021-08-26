const jwt = require('jsonwebtoken');

const secret = 'importar_o_ arquivo_jwt.evaluation.key';

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, secret);
    const { user } = payload;
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
