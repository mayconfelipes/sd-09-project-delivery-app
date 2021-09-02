import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import Header from '../components/Header';
import CheckoutTable from '../components/CheckoutTable';
import Customer from '../context/customerContext';
import useOrder from '../hooks/useOrder';

const Checkout = () => {
  const {
    shoppingCart,
    customer,
    sellers,
  } = useContext(Customer);

  const History = useHistory();

  const [order, setOrder] = useOrder();

  useEffect(() => {
    if (order.id) {
      History.push(`/customer/orders/${order.id}`);
    }
  }, [shoppingCart, order, History]);

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerId, setSellerId] = useState('');

  return (
    <>
      {/* <Header /> */}
      <h2>Finalizar Pedido</h2>
      <CheckoutTable />
      <h3>Detalhes e Endereço para Entrega</h3>
      <form
        onSubmit={
          (e) => setOrder(e, {
            email: customer.email,
            deliveryAddress,
            deliveryNumber,
            sellerId,
            totalPrice: shoppingCart.reduce(
              ((acc, curr) => acc + ((+curr.price) * curr.quantity)), 0,
            ),
            products: shoppingCart
              .map(({ id, name, urlimage, ...product }) => product),
            token: customer.token,
          })
        }
      >
        <label htmlFor="sellerId">
          P. Vendedora Responsável
          <select
            id="sellerId"
            data-testid="customer_checkout__select-seller"
            name="sellerId"
            value={ sellerId }
            onChange={ ({ target: { value } }) => setSellerId(value) }
          >
            <option>Selecione uma opção</option>
            {sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {seller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="deliveryAddress">
          Endereço
          <input
            id="deliveryAddress"
            name="deliveryAddress"
            data-testid="customer_checkout__input-address"
            value={ deliveryAddress }
            onChange={ ({ target: { value } }) => setDeliveryAddress(value) }
          />
        </label>
        <label htmlFor="deliveryNumber">
          Número
          <input
            type="number"
            id="deliveryNumber"
            name="deliveryNumber"
            data-testid="customer_checkout__input-addressNumber"
            value={ deliveryNumber }
            onChange={ ({ target: { value } }) => setDeliveryNumber(value) }
          />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
};

export default Checkout;
