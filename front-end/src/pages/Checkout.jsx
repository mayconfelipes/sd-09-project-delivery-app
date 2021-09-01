import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LargeButton from '../components/LargeButton';
import TextInput from '../components/TextInput';
import DropDownList from '../components/DropDownList';
import api from '../services/api';
import AppContext from '../context/AppContext';
import testIds from '../utils/dataTestIds';
import {
  setCarrinhoLocalStorage,
  getCarrinhoLocalStorage,
  getTotalCartLocalStorage,
} from '../utils/storage';

function Checkout() {
  const { totalCart, setTotalCart } = useContext(AppContext);
  const history = useHistory();
  const cartData = getCarrinhoLocalStorage();
  const [infoSale, setInfoSalle] = useState({
    deliveryAddress: '', deliveryNumber: '', sellerId: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setInfoSalle({ ...infoSale, [name]: value });
  };

  function handleRemove(i) {
    const RemoveCartData = {
      productId: i,
      quantity: 0,
    };
    setCarrinhoLocalStorage(RemoveCartData);
    setTotalCart(getTotalCartLocalStorage());
  }
  const handleSubmit = async () => {
    // cartData + infoSale + user(localstorage)
    // const { id, token } = JSON.parse(localStorage.getItem('user'));
    // const { deliveryAddress, deliveryNumber, sellerId } = infoSale;
    const saleData = totalCart;
    const result = await api.saveOrder(saleData);
    if (result.error) { console.error(`tratar erro ${result.error}`); }
    history.push(`/customer/order/${result.id}`); // conferir esse id
  };

  const getVendorList = async () => {
    const options = await api.getAllVendors(); // ['vendor1', 'vendor2', 'vendor3']
    return options;
  };

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
              <td data-testid={ testIds[22] + index }>{index + 1}</td>
              <td data-testid={ testIds[23] + index }>{item.name}</td>
              <td data-testid={ testIds[24] + index }>{item.quantity}</td>
              <td data-testid={ testIds[25] + index }>
                {item.unitPrice.replace('.', ',')}
              </td>
              <td data-testid={ testIds[26] + index }>
                {item.subTotal.replace('.', ',')}
              </td>
              <td>
                <LargeButton
                  buttonText="remover"
                  onClick={ () => handleRemove(item.productId) }
                  dataTestId={ testIds[27] + index }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <p data-TestId={ testIds[28] }>
          Total: R$
          { totalCart }
        </p>
      </section>
      <section>
        <p>Detalhes e Endereço para Entrega</p>
        <p>
          {' '}
          P.Vendedora Responsável:
          <DropDownList
            options={ getVendorList() }
            name="sellerId"
            dataTestId={ testIds[29] }
            onChange={ handleChange }
          />
        </p>
        <TextInput
          type="input"
          name="deliveryAddress"
          onChange={ handleChange }
          labelText="Endereço"
          placeholderText="Seu endereço aqui"
          dataTestId={ testIds[30] }
        />
        <TextInput
          type="input"
          name="deliveryNumber"
          onChange={ handleChange }
          labelText="Número"
          placeholderText="1234"
          dataTestId={ testIds[31] }
        />
        <LargeButton
          buttonText="FINALIZAR PEDIDO"
          // isDisabled={ disableButton }
          onClick={ handleSubmit }
          dataTestId={ testIds[32] }
        />
      </section>
    </main>
  );
}
export default Checkout;
