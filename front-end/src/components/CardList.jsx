import React, { useEffect, useState } from 'react';
import Api from '../services/api';
import Card from './Card';

const CardList = () => {
  const [productData, setProductData] = useState([]);

  const products = async () => {
    const productsAll = await Api.getAllProducts();
    console.log(productsAll);
    setProductData(productsAll); // o que seta os dados na minha variável product data
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
        />
      ))}
    </div>
  );
};

export default CardList;
