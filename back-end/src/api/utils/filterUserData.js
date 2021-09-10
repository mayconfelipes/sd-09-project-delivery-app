module.exports = async (arg) => {
  const isArgAFunction = typeof arg === 'function';
  const { dataValues: { id, name, email, role } } = isArgAFunction
    ? await arg()
    : arg;
  
  return { id, name, email, role };
};
