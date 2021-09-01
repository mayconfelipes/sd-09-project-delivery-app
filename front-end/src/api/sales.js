const sales = async ({
  userId, sellerId, totalPrice, deliveryAddress, deliveryNumber }) => {
  const body = JSON.stringify({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  });

  return fetch('http://localhost:3001/sales', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }).then((response) => response.json());
};

export default sales;
