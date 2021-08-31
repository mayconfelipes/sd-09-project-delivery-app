import { React } from 'react';
import { Link } from 'react-router-dom';

const CartButton = () => {
  // const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   const cartItens = JSON.parse(localStorage.getItem('products'));
  //   const currPrice = Object.entries(cartItens).reduce((acc, curr) => acc + curr[1], 0);
  //   setTotalPrice(currPrice);
  // }, [totalPrice]);
  const cartItens = JSON.parse(localStorage.getItem('products'));
  const currPrice = Object.entries(cartItens).reduce((acc, curr) => acc + curr[1], 0);
  return (
    <div>
      <p>
        Ver carrinho: R$
        <Link
          to="/customer/checkout"
          data-testid="customer_products__checkout-bottom-value"
          disabled={ currPrice === 0 }
        >
          {`${currPrice}`}
        </Link>
      </p>
    </div>
  );
};

export default CartButton;
