module.exports = (saleDate) => {
  const dateNumber = 9;
  function addZero(number) {
    return (number <= dateNumber) ? `0${number}` : number;
  }
  const date = new Date(saleDate);
  const saleDateFormated = `
    ${addZero(date.getDate().toString())}/${addZero((date.getMonth() + 1)
  .toString())}/${addZero(date.getFullYear().toString())}
  `;
  return saleDateFormated;
};
