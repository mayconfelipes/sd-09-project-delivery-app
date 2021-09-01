import React, { useContext } from 'react';
// import Header from '../components/Header';
import CheckoutItem from '../components/CheckoutItem';
import Customer from '../context/customerContext';

const Checkout = () => {
  const { shoppingCart, sellers } = useContext(Customer);
  console.log(shoppingCart, sellers);
  return (
    <>
      {/* <Header /> */}
      <h2>Finalizar Pedido</h2>
      <div className="cart-row">
        <span>Item</span>
        <span>Descrição</span>
        <span>Quantidade</span>
        <span>Valor Unitário</span>
        <span>Sub-total</span>
        <span>Remover Item</span>
      </div>
      <div className="cart-row">
        {shoppingCart.map((product, index) => (
          <CheckoutItem key={ product.id } index={ index } product={ product } />
        ))}
      </div>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {shoppingCart.reduce(
          ((acc, curr) => acc + ((+curr.price) * curr.quantity)), 0,
        )}
      </div>
      <form>
        <h3>Detalhes e Endereço para Entrega</h3>
        <label htmlFor="select-seler">
          P. Vendedora Responsável
          <select id="select-seller" data-testid="customer_checkout__select-seller">
            {sellers.map((seller) => (
              <option key={ seller.id }>
                {seller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input id="address" data-testid="customer_checkout__input-address" />
        </label>
        <label htmlFor="number">
          Número
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
