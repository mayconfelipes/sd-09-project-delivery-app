const STATUS_CODE = {
  badRequest: 400,
  unauthorized: 401,
  notFound: 404,
  conflict: 409,
};

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ message: err.details[0].message });
  }
  if (err.code) {
    return res.status(STATUS_CODE[err.code]).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json(err);
};
