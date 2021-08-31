import React from 'react';
import { useDeliveryContext } from '../../context/deliveryProvider';
import ItemCard from '../../components/ItemCards';
import Header from '../../components/Header';

const Custommer = () => {
  const { allProducts } = useDeliveryContext();

  return (
    <div>
      <Header />
      <ItemCard list={ allProducts } />
    </div>
  );
};

export default Custommer;
