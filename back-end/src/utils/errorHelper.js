module.exports = (code, message) => {
  const validateData = () => ({ code, message });
  
  throw validateData();
};