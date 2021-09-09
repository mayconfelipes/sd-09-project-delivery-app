const formatDate = (date) => {
  // const formatedDate = date.toLocaleString('pt-BR', { timeZone: 'UTC' });

  // return formatedDate;
  const dateFormated = new Date(date);
  return dateFormated.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

export default formatDate;
