import React, { useContext } from 'react';
// import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import Customer from '../context/customerContext';

const Checkout = () => {
  const {
    sellers,
  } = useContext(Customer);

  return (
    <>
      {/* <Header /> */}
      <h2>Finalizar Pedido</h2>
      <CheckoutTable />
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
