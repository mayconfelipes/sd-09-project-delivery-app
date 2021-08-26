const pingPong = (_req, res, _next) => {
  res.status(200).json({ msg: 'pong' });
};

module.exports = {
  pingPong,
};