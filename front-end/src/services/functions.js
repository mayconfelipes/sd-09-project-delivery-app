export const formatDate = (dateBD) => {
  const data = (dateBD.split('T'))[0].split('-');
  return `${data[2]}/${data[1]}/${data[0]}`;
};

export const formatPrice = (price) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(price);
