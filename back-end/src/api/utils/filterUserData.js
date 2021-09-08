module.exports = async (arg) => {
  const isArgAFunction = typeof arg === 'function';
  const { dataValues: { name, email, role } } = isArgAFunction
    ? await arg()
    : arg;
  
  return { name, email, role };
};
