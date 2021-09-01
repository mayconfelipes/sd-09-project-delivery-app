const formatPrice = (price) => {
  const formatedPrice = price
    .toLocaleString(
      'pt-br',
      { style: 'currency', currency: 'BRL' },
    );

  return formatedPrice;
};

export default formatPrice;
