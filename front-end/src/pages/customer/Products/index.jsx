import React, { useEffect, useState } from 'react';
// import P from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../../components/Navbar';
import ProductCard from '../../../components/ProductCard';
import PrimaryButton from '../../../components/PrimaryButton';
import style from './products.module.scss';

const Products = () => {
  const [products, setProducts] = useState([]);
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
            price={ price.replace('.', ',') }
            image={ image }
            description={ name }
          />))}
      </div>
      <div className={ style.cartButton }>
        <Link to="/customer/checkout">
          <PrimaryButton
            dataTestId="customer_products__checkout-bottom-value"
          >
            Ver Carrinho: R$ 26,90
          </PrimaryButton>
        </Link>
      </div>
    </>
  );
};

export default Products;

// Products.propTypes = {
//   children: P.node.isRequired,
// };
