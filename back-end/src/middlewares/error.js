module.exports = (err, _req, res, _next) => {
  res.status(err.statusCode).json({
    error: { message: err.message },
  });
};
