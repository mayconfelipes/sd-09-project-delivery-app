module.exports = async (arg) => {
  const isArgAFunction = typeof arg === 'function';
  const isFunctionAsync = arg.constructor.name === 'AsyncFunction';

  const { dataValues: { name, email, role } } = isArgAFunction
    ? (isFunctionAsync ? await arg() : arg())
    : arg;
  
  return { name, email, role };
};
