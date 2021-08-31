import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LargeButton from '../components/LargeButton';
import TextInput from '../components/TextInput';
import DropDownList from '../components/DropDownList';
import api from '../services/api';
import AppContext from '../context/AppContext';

import dataIds from '../utils/dataTestIds'; // mudar datatestids
// import { setCarrinhoLocalStorage } from '../utils/storage';

const ITEM_NUMBER_ID = 'customer_checkout__element-order-table-item-number-';
const NAME_ID = 'customer_checkout__element-order-table-name-';
const QUANT_ID = 'customer_checkout__element-order-table-quantity-';
const UNIT_PRICE_ID = 'customer_checkout__element-order-table-unit-price-';
const SUB_TOTAL_ID = 'customer_checkout__element-order-table-sub-total-';
const REMOVE_ID = 'customer_checkout__element-order-table-remove-';

function Checkout() {
  const { totalCart } = useContext(AppContext);
  const history = useHistory();
  const cartData = JSON.parse(localStorage.getItem('carrinho')) || [];

  const [infoSale, setInfoSalle] = useState({
    address: '', addressNumber: '',
  });
  const [carrinho, setCarrinho] = useState(cartData);

  const handleChange = ({ target: { name, value } }) => {
    setInfoSalle({ ...infoSale, [name]: value });
  };

  function handleRemove(i) {
    // console.table(cartData);
    const newCartData = carrinho
      .filter((item) => parseInt(item.productId, 10) !== parseInt(i, 10));
    localStorage.setItem('carrinho', JSON.stringify(newCartData));
    setCarrinho(newCartData);
  }

  const handleClick = async () => {
    const orderdata = JSON.parse(localStorage.getItem('orderData'));
    const result = await api.saveOrder(orderdata);
    if (result.error) { console.error(`tratar erro ${result.error}`); }
    history.push(`/customer/order/${result.id}`); // conferir esse id
  };
  const options = ['vendor1', 'vendor2', 'vendor3'];// buscar vendedores

  return (
    <main>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, index) => (
            <tr key={ index }>
              <td data-testid={ ITEM_NUMBER_ID + index }>{index + 1}</td>
              <td data-testid={ NAME_ID + index }>{item.name}</td>
              <td data-testid={ QUANT_ID + index }>{item.quantity}</td>
              <td data-testid={ UNIT_PRICE_ID + index }>
                {item.unitPrice}
              </td>
              <td data-testid={ SUB_TOTAL_ID + index }>
                {item.subTotal}
              </td>
              <td>
                <LargeButton
                  buttonText="remover"
                  onClick={ () => handleRemove(item.productId) }
                  dataTestId={ REMOVE_ID + index }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <p data-TestId={ dataIds[28] }>
          Total: R$
          { totalCart }
        </p>
      </section>
      <section>
        <p>Detalhes e Endereço para Entrega</p>
        <TextInput
          type="text"
          name="address"
          onChange={ handleChange }
          labelText="Endereço"
          placeholderText="Seu endereço aqui"
          data-TestId={ dataIds[30] }
        />
        <TextInput
          type="text"
          name="addressNumber"
          onChange={ handleChange }
          labelText="Endereço"
          placeholderText="Seu endereço aqui"
          data-TestId={ dataIds[31] }
        />
        <DropDownList
          options={ options }
          name="seller"
          dataTestId={ dataIds[29] }
          onChange={ handleChange }
        />
        <LargeButton
          buttonText="FINALIZAR PEDIDO"
          // isDisabled={ disableButton }
          onClick={ handleClick }
          dataTestId={ dataIds[32] }
        />
      </section>
    </main>
  );
}

export default Checkout;
