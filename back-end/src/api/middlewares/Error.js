// module.exports = (error, _req, res, _next) => {
//   if (!error.status) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
//   res.status(error.status).json({ message: error.message });
// };

const STATUS_CODE = {
  conflict: 409,
  badRequest: 400,
  notFound: 404,
  unauthorized: 401,
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
