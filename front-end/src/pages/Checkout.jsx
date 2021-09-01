import React from 'react';
import Header from '../components/Header';
import Button from '../components/button';

const Checkout = () => {
  const i = 0;
  console.log(i);
  return (
    <section className="checkout">
      <Header />
      <span className="checkout-order">Finalizar Pedido</span>
      <section className="items">
        <table>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Subtotal</td>
            <td>Remover Item</td>
          </tr>
          <tr>cervejas aqui</tr>

        </table>
        <span className="total">Total: R$ 1000</span>
      </section>
      <span className="checkout-details">Detalhes e Endereço para Entrega</span>
      <section className="details">
        <label htmlFor="seller">
          P.Vendedora Responsável:
          <select
            name="employees"
            id="seller"
            data-testid="customer_checkout__select-seller"
          >
            <option value="fulanaDeTal">Fulana de Tal</option>
          </select>
        </label>
        <label htmlFor="addressInput">
          Endereço
          <input
            type="text"
            id="addressInput"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="text"
            id="number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
      </section>
      <Button
        name="Finalizar pedido"
        data-testid="customer_checkout__button-submit-order"
      />
    </section>
  );
};

export default Checkout;
