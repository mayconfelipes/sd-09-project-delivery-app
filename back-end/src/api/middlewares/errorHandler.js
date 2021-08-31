const httpStatusCode = require('../utils/httpStatusCodes');

const errorHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    const { details } = err;
    return res.status(httpStatusCode.badRequest)
    .json({ message: details[0].message, code: 'badRequest' });
  }

  if (err.code) {
    const { code, message } = err;
    return res.status(httpStatusCode[code]).json({ message, code });
  }

  console.log(err);

  return res.status(httpStatusCode.internalServerError).json({
      message: 'Oooops D: internal Server Error',
      code: 'internalServerError',
  });
};

module.exports = errorHandler;
