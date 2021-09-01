import React, { useContext, useEffect } from 'react';
// import Header from '../components/Header';
import CheckoutItem from '../components/CheckoutItem';
import Customer from '../context/customerContext';
import useTotalPrice from '../hooks/utils/useTotalPrice';

const Checkout = () => {
  const {
    shoppingCart,
    sellers,
  } = useContext(Customer);

  const [totalPrice, setTotalPrice] = useTotalPrice();

  useEffect(() => {
    setTotalPrice(shoppingCart);
  }, [shoppingCart, setTotalPrice]);

  return (
    <>
      {/* <Header /> */}
      <h2>Finalizar Pedido</h2>
      <table>
        <thead className="cart-row">
          <tr>
            <th className="grow-1">Item</th>
            <th className="grow-3">Descrição</th>
            <th className="grow-1">Quantidade</th>
            <th className="grow-1">Valor Unitário</th>
            <th className="grow-1">Sub-total</th>
            <th className="grow-1">Remover Item</th>
          </tr>
        </thead>
        <tbody className="cart-row">
          {shoppingCart.length ? shoppingCart.map((product, index) => (
            <CheckoutItem key={ product.id } index={ index } product={ product } />
          )) : 'Apenas teias de aranha em seu carrinho...'}
        </tbody>
      </table>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: R$ ${totalPrice}`}
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
