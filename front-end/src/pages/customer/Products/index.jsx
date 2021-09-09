import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useGlobalContext from '../../../context/GlobalStateProvider';

import NavBar from '../../../components/Navbar';
import ProductCard from '../../../components/ProductCard';
import PrimaryButton from '../../../components/PrimaryButton';

import style from './products.module.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { totalPrice } = useGlobalContext();

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className={ style.productsContainer }>
        {products.map(({ id, name, price, url_image: image }) => (
          <ProductCard
            key={ id }
            id={ id }
            price={ `${price.replace('.', ',')}` }
            image={ image }
            description={ name }
          />))}
      </div>
      <div className={ style.cartButton }>
        <Link to="/customer/checkout">
          <PrimaryButton
            dataTestId="customer_products__button-cart"
            isBtnDisabled={ totalPrice === '0,00' }
          >
            Ver Carrinho: R$
            {' '}
            <span
              data-testid="customer_products__checkout-bottom-value"
            >
              {totalPrice}
            </span>
          </PrimaryButton>
        </Link>
      </div>
    </>
  );
};

export default Products;
