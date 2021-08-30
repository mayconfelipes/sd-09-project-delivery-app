import React, { useContext } from 'react';
// import Header from '../components/Header';
// import ProductItem from '../components/ProductItem';
import Customer from '../context/customerContext';

const Checkout = () => {
  const { shoppingCart, sellers } = useContext(Customer);
  return (
    <>
      {/* <Header /> */}
      <h1>Finalizar Pedido</h1>
      {/* {shoppingCart.forEach((product) => (
        <ProductItem>{product}</ProductItem>
      ))} */}
      <div className="">
        Total: R$
        {shoppingCart.reduce((acc, curr) => acc + curr)}
      </div>
      <form>
        <label htmlFor="select-seler">
          <select id="select-seller" data-testid="customer_checkout__select-seller">
            {sellers.forEach((seller) => (
              <option key={ seller.id }>
                {seller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          <input id="address" data-testid="customer_checkout__input-address" />
        </label>
        <label htmlFor="number">
          <input id="number" data-testid="customer_checkout__input-addressNumber" />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
};

export default Checkout;
