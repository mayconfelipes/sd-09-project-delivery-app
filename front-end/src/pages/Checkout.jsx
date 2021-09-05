import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import TableProducts from '../Components/TableProducts';
import NavBar from '../Components/NavBar';
import api from '../services/api';

const user = JSON.parse(localStorage.getItem('user'));

function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [totalPriceStorage, settotalPriceStorage] = useState(0);
  const [salesDetails, setSalesDetails] = useState({
    userId: user.id,
    sellerId: 2,
    // totalPrice: totalPriceStorage,
    deliveryAddress: '',
    deliveryNumber: 0,
    // status: 'pendente',
    cart: localStorage.getItem('cart'),
  });
  const history = useHistory();

  useEffect(() => {
    settotalPriceStorage(Number(localStorage.getItem('totalPrice')));
    api.get('user/seller').then((res) => setSellers(res.data));
  }, [totalPriceStorage]);

  const detailsAndAdressRender = () => (
    <table>
      <thead>
        <tr>
          <th>P. Vendedora Responsável</th>
          <th>Endereço</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select
              data-testid="customer_checkout__select-seller"
              onClick={
                ({ target }) => setSalesDetails({
                  ...salesDetails, sellerId: target.value,
                })
              }
            >
              {sellers.map((seller) => (
                <option key={ seller.id } value={ seller.id }>
                  {seller.name}
                </option>))}
            </select>
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              onChange={
                ({ target }) => setSalesDetails({
                  ...salesDetails, deliveryAddress: target.value,
                })
              }
            />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              onChange={
                ({ target }) => setSalesDetails({
                  ...salesDetails, deliveryNumber: target.value,
                })
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );

  const finishOrder = async () => {
    console.log('token: ', user.token);
    /* axios.post('http://localhost:3001/sale',
      salesDetails, {
        headers: {
          Authorization: user.token,
        },
      }); */
    await api.post('sale', salesDetails, {
      headers: {
        Authorization: user.token,
      },
    });
    const test = await api.get(`sale/byUserId/${user.id}`);
    console.log('xablau', test);
    history.push(`/customer/orders${salesDetails.sellerId}`);
  };

  return (
    <div className="checkout-container">
      <NavBar />
      <h2>Finalizar pedido</h2>
      <TableProducts />
      <hr />
      <h3>Detalhes do pedido para entrega</h3>
      {detailsAndAdressRender()}
      <button
        className="checkoutBtn"
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ finishOrder }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default Checkout;
