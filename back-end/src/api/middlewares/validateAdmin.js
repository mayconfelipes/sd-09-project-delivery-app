module.exports = (req, res, next) => {
  if (req.user.role !== 'administrator') {
    return res.status(401).json({ message: 'Only admins can register new admins' });
  }
  return next();
};
