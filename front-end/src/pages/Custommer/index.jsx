import React from 'react';
import { useDeliveryContext } from '../../context/deliveryProvider';
import NavBar from '../../components/Navbar/index';
import ItemCard from '../../components/ItemCards';

const Custommer = () => {
  const { allProducts } = useDeliveryContext();

  return (
    <div>
      <NavBar />
      <ItemCard list={ allProducts } />
    </div>
  );
};

export default Custommer;
