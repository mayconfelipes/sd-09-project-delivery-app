import React from 'react';
import ProductLine from '../Components/Molecules/ProductLine';
import CardProduct from '../Components/Organisms/CardProduct';
import CardStatus from '../Components/Organisms/CardStatus';
import NavBar from '../Components/Organisms/NabBar';

function Products() {
  return (
    <>
      <NavBar />
      <CardProduct>teste</CardProduct>
      <CardStatus>00001</CardStatus>
      <ProductLine>name</ProductLine>
    </>
  );
}

export default Products;
