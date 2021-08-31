import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import LargeButton from '../components/LargeButton';
import TextInput from '../components/TextInput';
import dataTestIds from '../utils/dataTestIds'; // mudar datatestids
import {
  getQtdProductCartLocalStorage,
  getTotalCartLocalStorage,
} from '../utils/storage';

const ITEM_NUMBER_ID = 'customer_checkout__element-order-table-item-number-';
const NAME_ID = 'customer_checkout__element-order-table-name-';
const QUANT_ID = 'customer_checkout__element-order-table-quantity-';
const UNIT_PRICE_ID = 'customer_checkout__element-order-table-unit-price-';
const SUB_TOTAL_ID = 'customer_checkout__element-order-table-sub-total-';
const REMOVE_ID = 'customer_checkout__element-order-table-remove-';

const { setTotalCart } = useContext;
// const [chartData, setChartData] = useState([]);
// storage array?
// [id,quantity]

const [addressData, SetAddresData] = useState([]);

const handleChange = ({ target: { name, value } }) => {
  SetAddresData({ ...addressData, [name]: value });
};

const handleClick = async () => {
const orderdata = JSON.parse(localStorage)
};

function Checkout() {
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
          {chartData.map((item, index) => (
            <tr key={ index }>
              <td data-testid={ ITEM_NUMBER_ID + index }>{index}</td>
              <td data-testid={ NAME_ID + index }>{item.description}</td>
              <td data-testid={ QUANT_ID + index }>{item.quantity}</td>
              <td data-testid={ UNIT_PRICE_ID + index }>
                {item.value.toFixed(2).toString().replace('.', ',')}
              </td>
              <td data-testid={ SUB_TOTAL_ID + index }>
                {(item.quantity * item.value)}
              </td>
              <td>
                <LargeButton
                  buttonText="remover"
                  onClick={ () => {} }
                  dataTestId={ REMOVE_ID + index }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <p data-TestId="customer_checkout__element-order-total-price">
          {/* buscar preço */}
          { totalPrice }
        </p>
      </section>
      <section>
        <p>Detalhes e Endereço para Entrega</p>
        <select>
          {/* buscar vendedores */}
        </select>
        <TextInput
          type="text"
          name="address"
          onChange={ handleChange }
          labelText="Endereço"
          placeholderText="Seu endereço aqui"
          dataTestId="customer_checkout__input-address"
        />
        <TextInput
          type="number"
          name="address-number"
          onChange={ handleChange }
          labelText="Endereço"
          placeholderText="Seu endereço aqui"
          dataTestId="customer_checkout__input-addressNumber"
        />
        <LargeButton
          buttonText="FINALIZAR PEDIDO"
          // isDisabled={ disableButton }
          onClick={ handleClick }
          dataTestId="customer_checkout__button-submit-order"
        />
      </section>
    </main>
  );
}

export default Checkout;
