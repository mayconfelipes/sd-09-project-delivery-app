module.exports = (code, message) => {
  const validateData = () => ({ code, message });
  console.log(code);
  throw validateData();
};