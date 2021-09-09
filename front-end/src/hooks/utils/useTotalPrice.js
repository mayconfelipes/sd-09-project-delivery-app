import { useState } from 'react';

export default function useTotalPrice() {
  const [totalPrice, setPrice] = useState('0,00');

  const setTotalPrice = (shoppingCart, page = 'checkout', role = 'customer') => {
    const totalNumber = shoppingCart.reduce(
      (acc, curr) => (
        acc + (
          (+curr.price) * (page === 'checkout' || role === 'customer'
            ? curr.quantity : curr.SaleProduct.quantity))
      ), 0,
    );
    const totalWithDecimal = `${(Math.round(totalNumber * 100) / 100).toFixed(2)}`
      .split('.').join(',');
    setPrice(totalWithDecimal);
  };

  return [totalPrice, setTotalPrice];
}
