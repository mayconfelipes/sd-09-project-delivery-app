import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar';
import context from '../../context';
import CardProduct from '../../components/cardProduct';
import formatPrice from '../../services/formatPrice';
import { getProducts } from '../../services/fetchApi';
import * as S from './styled';

const Products = () => {
  // catalog loading
  const {
    cart, setCatalog, catalog,
  } = useContext(context);
  const { totalValue } = cart;
  const [disabled, setDisabled] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    const result = await getProducts(token);

    result.forEach((elem) => {
      elem.price = parseFloat(elem.price);
    });
    setCatalog(result);
    setLoading(false);
  };

  const goToCheckout = () => {
    localStorage.setItem('cart', JSON.stringify({ ...cart }));
    setRedirect(true);
  };

  useEffect(() => {
    setDisabled(totalValue === 0);
  }, [totalValue]);

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(loading);
  const paginas = [
    'PRODUTOS *customer_products__element-navbar-link-products*/customer/products',
    'MEUS PEDIDOS *customer_products__element-navbar-link-orders*/customer/orders',
  ];
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <S.Container>
      { redirect && <Redirect to="/customer/checkout" /> }
      <Navbar abas={ paginas } user={ name } />
      <h1>Produtos</h1>
      <S.List>
        {
          loading
            ? <p>Loading</p>
            // : catalog.map((element) => console.log(element))
            : catalog.map(({ name: productName, price, urlImage, id }) => (
              <CardProduct
                key={ id }
                image={ urlImage }
                name={ productName }
                price={ price }
                id={ id }
              />))
        }
      </S.List>
      <button
        type="button"
        onClick={ goToCheckout }
        data-testid="customer_products__button-cart"
        disabled={ disabled }
      >
        <span> VER CARRINHO: </span>
        <span data-testid="customer_products__checkout-bottom-value">
          { formatPrice(totalValue) }
        </span>
      </button>
    </S.Container>
  );
};

export default Products;
