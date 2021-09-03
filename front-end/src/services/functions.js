export const formatDate = (dateBD) => {
  console.log(dateBD);
  const data = (dateBD.split('T'))[0].split('-');
  return data.reverse().join('/');
};

export const formatPrice = (price) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(price);
