const formatDate = (date) => {
  const dateFormated = new Date(date);
  return dateFormated.toLocaleDateString('pt-BR');
};

export default formatDate;
