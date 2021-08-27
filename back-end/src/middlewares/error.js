module.exports = (err, req, res, next) => {
  return res.status(err.statusCode).json({
    error: { message: err.message }
  });
};
