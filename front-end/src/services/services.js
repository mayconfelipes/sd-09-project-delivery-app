import React from 'react';
import CardProduct from '../components/CardProduct';

const mapCards = (productList) => {
  productList.map((product, index) => <CardProduct product={ product } key={ index } />);
};

export default {
  mapCards,
  add,
  rmv,
};
