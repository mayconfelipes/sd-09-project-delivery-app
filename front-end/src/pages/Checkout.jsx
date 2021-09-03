import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Context from '../context/Context';

const Checkout = () => {
  const { products, setProducts } = useContext(Context);
  // const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem('total')) || 0);
  const [addressNumber, setAddressNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'address':
      return setAddress(value);
    case 'number':
      return setAddressNumber(value);
    default:
      return '';
    }
  };

  console.log(address, addressNumber);

  // console.log(products);

  const handleClick = (productId, productPrice, productQuantity) => {
    const list = products.filter((product) => {
      const listUpdated = product.id !== productId;
      const result = total - productPrice * productQuantity;
      setTotal(result);
      localStorage.setItem('total', result);
      return listUpdated;
    });
    console.log(list);
    setProducts(list);
    localStorage.setItem('products', JSON.stringify(list));
  };

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
          { products.map((product, index) => (
            <tr key={ product.id }>
              <td>
                { index + 1 }
              </td>
              <td>
                { product.name }
              </td>
              <td>
                { product.quantity }
              </td>
              <td>
                { product.price }
              </td>
              <td>
                { parseFloat(product.price * product.quantity).toFixed(2) }
              </td>
              <td>
                <button
                  type="button"
                  onClick={
                    () => handleClick(product.id, product.price, product.quantity)
                  }
                >
                  REMOVER
                </button>
              </td>
            </tr>
          )) }

        </table>
        <span className="total">
          Total: R$
          { parseFloat(total).toFixed(2) }
        </span>
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
            name="address"
            data-testid="customer_checkout__input-address"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="text"
            name="number"
            id="number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ handleChange }
          />
        </label>
      </section>
      <button
        type="button"
        name="Finalizar pedido"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar pedido
      </button>
    </section>
  );
};

export default Checkout;
