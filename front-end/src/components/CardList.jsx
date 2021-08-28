import React, { useEffect, useState } from 'react';
import Api from '../services/api';
import Card from './Card';

const CardList = () => {
  const [productData, setProductData] = useState([]);

  const products = async () => {
    const productsAll = await Api.getAllProducts();
    setProductData(productsAll);
  };
  useEffect(() => {
    products();
  }, []);
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
