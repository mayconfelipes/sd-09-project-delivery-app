const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);
  return res.status(err.status || 500).json({ message: err.message });
};

module.exports = errorMiddleware;
