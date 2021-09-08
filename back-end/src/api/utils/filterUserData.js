const handleFunctions = (arg) => {
  const isFunctionAsync = arg.constructor.name === 'AsyncFunction';
  return isFunctionAsync ? arg().then((out) => out) : arg();
};

module.exports = (arg) => {
  const isArgAFunction = typeof arg === 'function';
  const { dataValues: { name, email, role } } = isArgAFunction
    ? handleFunctions(arg)
    : arg;
  
  return { name, email, role };
};
