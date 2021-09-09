const transformOrderNumber = (number) => {
  const MAX_LENGTH = 4;
  number = number.toString();
  return '0'.repeat(MAX_LENGTH - number.length) + number;
};

export default transformOrderNumber;
