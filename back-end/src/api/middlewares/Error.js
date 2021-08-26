module.exports = (error, _req, res, _next) => {
  if (!error.status) {
    console.log(error);
    return res.status(500).json(error);
  }
  res.status(error.status).json({ message: error.message });
};
