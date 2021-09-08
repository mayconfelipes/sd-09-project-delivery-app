const status = { badRequest: 400, unauthorized: 401, notFound: 404, conflict: 409 };

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).json({ message: err.details[0].message });

  if (err.code) return res.status(status[err.code]).json({ message: err.message });

  return res.status(500).json({ message: err });
};
