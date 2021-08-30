module.exports = (statusCode, message) => ({
  error: {
    statusCode,
    message,
  },
});
