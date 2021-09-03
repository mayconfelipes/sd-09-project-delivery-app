import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import ProductCard from '../Components/ProductCard';

function Products() {
  const history = useHistory();
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const updateTotalPrice = (action, productPrice) => {
    const currTotalPrice = totalPrice;

    if (action === 'subtract') {
      setTotalPrice(
        parseFloat((currTotalPrice - parseFloat(productPrice)).toFixed(2)),
      );
    } else {
      setTotalPrice(
        parseFloat((currTotalPrice + parseFloat(productPrice)).toFixed(2)),
      );
    }
  };

  const chengeTotalPrice = (price) => {
    setTotalPrice(price);
  };

  const addToCart = ({ id, name, price }) => {
    const existentProduct = cart.find((product) => product.id === id);

    console.log(price);
    if (!existentProduct) {
      setCart([
        ...cart,
        {
          id,
          name,
          price: parseFloat(parseFloat(price).toFixed(2)),
          quantity: 1,
        },
      ]);
    } else {
      existentProduct.price += parseFloat(parseFloat(price).toFixed(2));
      existentProduct.quantity += 1;
    }
  };

  const removeFromCart = ({ id, price }) => {
    if (!cart.length) return;

    const existentProduct = cart.find((product) => product.id === id);

    if (existentProduct.price === parseFloat(parseFloat(price).toFixed(2))) {
      const cartArr = [...cart];

      cartArr.splice(
        cartArr.findIndex((product) => product.id === id),
        1,
      );

      setCart(cartArr);
    } else {
      existentProduct.price -= parseFloat(parseFloat(price).toFixed(2));
      existentProduct.quantity -= 1;
    }
  };

  const fetchProducts = async () => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/product/',
    });

    return response.data;
  };

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await fetchProducts());
    };

    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      <ul>
        {products.map((product) => (
          <li key={ product.id }>
            <ProductCard
              { ...product }
              updateTotalPrice={ updateTotalPrice }
              addToCart={ addToCart }
              removeFromCart={ removeFromCart }
              changeTotalPrice={ chengeTotalPrice }
            />
          </li>
        ))}
      </ul>
      <button
        disabled={ cart.length === 0 }
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ () => {
          localStorage.setItem('cart', JSON.stringify(cart));
          history.push('/customer/checkout');
        } }
      >
        Ver Carrinho: R$
        {' '}
        <span data-testid="customer_products__checkout-bottom-value">
          { totalPrice.toString().replace(/\./, ',') }
        </span>
      </button>
    </>
  );
}

export default Products;
