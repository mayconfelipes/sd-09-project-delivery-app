const YEAR_SLICE = -2;

export default (date) => {
  const [year, month, day] = date.split('T')[0].split('-');
  return [day, month, year.slice(YEAR_SLICE)].join('/');
};
