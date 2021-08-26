import React from 'react';
// import P from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from '../../../components/Navbar';
import ProductCard from '../../../components/ProductCard';
import PrimaryButton from '../../../components/PrimaryButton';
import style from './products.module.scss';

import products from '../../../utils/arrayOfProduct';

const Products = () => (
  <>
    <NavBar />
    <div className={ style.productsContainer }>
      {products.map(({ id, name, price, image }) => (
        <ProductCard key={ id } price={ price } image={ image } description={ name } />))}
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

export default Products;

// Products.propTypes = {
//   children: P.node.isRequired,
// };
