import React, { useEffect, useState } from 'react';
import CartItems from '../../components/cartItems/CartItems';
import NavBar from '../../components/navBar/NavBar';

export default function Checkout() {
  const [currentCart, setCurrentCart] = useState([]);
  const [currentTotalPrice, setCurrentTotalPrice] = useState(0);

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('productsAdded'));
    const totalPrice = JSON.parse(localStorage.getItem('totalPrice'));
    setCurrentCart(cartLocalStorage);
    setCurrentTotalPrice(totalPrice);
  }, []);

  return (
    <div>
      <NavBar />
      <div
        style={ { width: '80%', margin: 'auto' } }
      >
        <div
          style={ { display: 'flex', justifyContent: 'space-between' } }
        >
          <div>item</div>
          <div>descrição</div>
          <div>
            <span>Quantidade</span>
            <span>Valor unitário</span>
            <span>Sub-total</span>
            <span>Remover item</span>
          </div>
        </div>
        <div>
          {currentCart
            .map((cartItem, index) => (<CartItems
              key={ cartItem.id }
              cartItem={ cartItem }
              setCurrentCart={ setCurrentCart }
              currentCart={ currentCart }
              setCurrentTotalPrice={ setCurrentTotalPrice }
              index={ index }
            />))}
          <span>Total R$:</span>
          <div
            data-testid="customer_checkout__element-order-total-price"
          >
            {currentTotalPrice.toString().split('.').join(',')}
          </div>
        </div>
      </div>
      <div>
        <h1>Detalhes e Endereço para Entrega</h1>
        <div>
          <select
            name="sellers"
            data-testid="customer_checkout__select-seller"
          >
            <option value="seller-1">Seller 1</option>
            <option value="seller-2">Seller 2</option>
            <option value="seller-3">Seller 3</option>
            <option value="seller-4">Seller 4</option>
          </select>
          <div
            style={ { display: 'inline' } }
          >
            <input
              type="text"
              data-testid="customer_checkout__input-address"
            />
            <input
              type="number"
              data-testid="customer_checkout__input-addressNumber"
            />
            <button
              data-testid="customer_checkout__button-submit-order"
              type="button"
            >
              FINALIZAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
