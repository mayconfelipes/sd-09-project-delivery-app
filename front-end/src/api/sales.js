const sales = async ({
  seller, totalPrice, deliveryAddress, deliveryNumber, products, token }) => {
  const body = JSON.stringify({
    seller,
    totalPrice,
    deliveryNumber,
    deliveryAddress,
    products,
  });

  return fetch('http://localhost:3001/sales', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body,
  }).then((response) => response.json());
};

export default sales;
