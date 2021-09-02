module.exports = (err, _req, res, _next) => {
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      error: { message: err.message },
    });
  }

  return res.status(500).json({ message: 'Algo deu errado aqui', error: err });
};
