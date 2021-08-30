module.exports = (user) => {
  const { password, ...rest } = user;

  return rest;
};
