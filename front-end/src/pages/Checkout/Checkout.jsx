import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import CheckoutItem from '../../components/CheckoutItem';

const Checkout = () => {
  const [price, setTotalPrice] = useState(0);
  const [cartItens, setCartItens] = useState([]);
  const history = useHistory();
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

  const brazilianPrice = () => {
    const minN = 3;
    const newPrice = price.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };

  return (
    <div>
      <NavBar />
      <ul>
        {cartItens.map((item, index) => (<CheckoutItem
          key={ index + item.item.name }
          cartItem={ item.item }
          order={ index }
          cartItens={ cartItens }
          setCartItens={ setCartItens }
        />))}
      </ul>
      <button
        type="button"
        data-testid="customer_checkout__element-order-total-price"
        onClick={ () => history.push('/customer/orders/1') }
      >
        {brazilianPrice()}
      </button>
    </div>
  );
};

export default Checkout;
