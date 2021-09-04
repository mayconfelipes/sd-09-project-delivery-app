const transformDate = (date) => {
  const unformatted = new Date(date);

  const magicNumber = 10;
  let day = unformatted.getDate();
  if (day < magicNumber) day = ['0', day].join('');
  let month = unformatted.getMonth() + 1;
  if (month < magicNumber) month = ['0', month].join('');
  const year = unformatted.getFullYear();

  return [day, month, year].join('/');
};

export default transformDate;
