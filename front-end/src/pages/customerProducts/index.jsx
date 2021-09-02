import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/navbar';
import context from '../../context';
import CardProduct from '../../components/cardProduct';
import formatPrice from '../../services/formatPrice';
import { getProducts } from '../../services/fetchApi';
import * as S from './styled';

const Products = () => {
  const {
    cart: { totalValue }, catalog, setCatalog, loading, setLoading,
  } = useContext(context);

  const fetchProducts = async () => {
    setLoading(true);
    const { token } = JSON.parse(localStorage.getItem('user'));
    const result = await getProducts(token);

    result.forEach((elem) => {
      elem.price = parseFloat(elem.price);
    });

    setCatalog(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const paginas = [
    'PRODUTOS /customer_products__element-navbar-link-products',
    'MEUS PEDIDOS/customer_products__element-navbar-link-orders',
  ];
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (
    <S.Container>
      <Navbar abas={ paginas } user={ name } />
      <h1>Produtos</h1>
      <S.List>
        {
          loading
            ? <p>Loading</p>
            : catalog.map(({ name: productName, price, url_image: urlImage, id }) => (
              <CardProduct
                key={ id }
                image={ urlImage }
                name={ productName }
                price={ price }
                id={ id }
              />))
        }
      </S.List>
      <span>{ `VER CARRINHO: ${formatPrice(totalValue)}` }</span>
    </S.Container>
  );
};

export default Products;
