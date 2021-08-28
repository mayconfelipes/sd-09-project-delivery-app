import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Api from '../services/api';
import { getTokenLocalStorage, removeUserDataLocalStorage } from '../utils/storage';
import Card from './Card';

const CardList = () => {
  const [productData, setProductData] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchProducts = async () => { // requisição para o Backend
    const productsAll = await Api.getAllProducts(getTokenLocalStorage());
    if (productsAll.error) {
      return setIsError(true);
    }
    return setProductData(productsAll);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isError) {
    removeUserDataLocalStorage();
    return <Redirect to="/login" />;
  }

  return (
    <div className="list-products">
      {productData.map((product, index) => (
        <Card
          key={ index }
          id={ product.id }
          price={ product.price }
          title={ product.name }
          image={ product.url_image }
        />
      ))}
    </div>
  );
};

export default CardList;
