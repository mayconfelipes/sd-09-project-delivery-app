import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/navbar';
import context from '../../context';
// import CardProduct from '../../components/cardProduct';
import formatPrice from '../../services/formatPrice';
import { getProducts } from '../../services/fetchApi';

const Products = () => {
  const { cart: { totalValue } } = useContext(context);

  const fetchProducts = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log('fiz o fetch');
    console.log(token);

    const result = await getProducts(token);
    console.log(result);
  };

  useEffect(() => {
    fetchProducts();
  });

  const paginas = [
    'PRODUTOS /customer_products__element-navbar-link-products',
    'MEUS PEDIDOS/customer_products__element-navbar-link-orders',
  ];
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Navbar abas={ paginas } user={ name } />
      <h1>Produtos</h1>
      {/* { products.map(({ name: productName, price, url_image: urlImage, id }) => {
        console.log('lint');
        return (
          <CardProduct
            key={ id }
            image={ urlImage }
            name={ productName }
            price={ price }
            id={ id }
          />
        );
      }) } */}
      <span>{ `VER CARRINHO: ${formatPrice(totalValue)}` }</span>
    </div>
  );
};

export default Products;
