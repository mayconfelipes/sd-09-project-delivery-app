const YEAR_SLICE = -2;

export default (date, fullYear = false) => {
  const [year, month, day] = date.split('T')[0].split('-');
  const outputYear = fullYear ? year : year.slice(YEAR_SLICE);
  return [day, month, outputYear].join('/');
};
