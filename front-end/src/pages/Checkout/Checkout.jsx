import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import CheckoutItem from '../../components/CheckoutItem';

const Checkout = () => {
  const [price, setTotalPrice] = useState(0);
  const [cartItens, setCartItens] = useState([]);

  useEffect(() => {
    const getItens = JSON.parse(localStorage.getItem('products'));
    const itensArray = Object.keys(getItens).map((key) => ({
      item: {
        ...getItens[key],
        name: key,
      },
    }));
    setCartItens(itensArray);
    const currPrice = Object.entries(getItens)
      .reduce((acc, curr) => acc + curr[1].totalProduct, 0).toFixed(2);
    setTotalPrice(currPrice);
  }, []);

  return (
    <div>
      <NavBar />
      <ol>
        {cartItens.map((item, index) => (<CheckoutItem
          key={ index + item.item.name }
          cartItem={ item.item }
          order={ index }
        />))}
      </ol>

      <button type="button">{price}</button>
    </div>
  );
};

export default Checkout;
