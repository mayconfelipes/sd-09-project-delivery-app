module.exports = (schema, data, code) => {
  const { error } = schema.validate(data);

  const validateData = (message) => ({ code, message });
  
  if (error) {
    const { message } = error.details[0];
    throw validateData(message);
  }

  return null;
};