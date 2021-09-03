const formatDate = (date) => {
  const then = 10;
  const newDate = date.substring(0, then);
  return newDate.replaceAll('-', '/').split('/').reverse().join('/');
};

export default formatDate;
