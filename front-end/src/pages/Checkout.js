import React from 'react';
import Header from '../components/Header';
import CheckoutList from '../components/CheckoutList';
import ProductList from '../components/ProductList';
import Button from '../components/Button';
import AddressForm from '../components/AddressForm';

const Checkout = () => {
  const shoppingCart = JSON.parse(sessionStorage.getItem('carrinho'));
  return (
    <>
      <Header />
      <h1>Finalizar Pedido</h1>
      <CheckoutList>
        {shoppingCart.forEach((product) => (
          <ProductList>{product}</ProductList>
        ))}
        <Button>
          Total: R$
          {shoppingCart.reduce((acc, curr) => acc + curr)}
        </Button>
      </CheckoutList>
      <AddressForm>
        {}
      </AddressForm>
      <Button>FINALIZAR PEDIDO</Button>
    </>
  );
};

export default Checkout;
