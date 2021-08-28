module.exports = (req, _res, next) => {
  if (!req.body.password) {
    return next({
      error: {
        statusCode: 400,
        message: 'O campo "password" é obrigatório.',
      },
    });
  }

  if (req.body.password.length < 6) {
    return next({
      error: {
        statusCode: 400,
        message: 'O campo "password" deve ter pelo menos 6 caracteres.',
      },
    });
  }

  next();
};
