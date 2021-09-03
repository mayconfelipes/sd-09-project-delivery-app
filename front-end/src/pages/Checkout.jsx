import React, { useState, useEffect } from 'react';
import TableProducts from '../Components/TableProducts';
import NavBar from '../Components/NavBar';
// import { useHistory } from 'react-router-dom';
import api from '../services/api';

const { id } = JSON.parse(localStorage.getItem('user'));

function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [totalPriceStorage, settotalPriceStorage] = useState(0);
  const [salesDetails, setSalesDetails] = useState({
    userId: id,
    sellerId: 2,
    totalPrice: totalPriceStorage,
    deliveryAdress: '',
    deliveryNumber: 0,
    status: 'pendente',
  });
  // const history = useHistory();
  console.log('detalhes', salesDetails);

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
                  ...salesDetails, deliveryAdress: target.value,
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
    await api.post('sale', salesDetails);
    const test = await api.get('sale');
    console.log('xablau', test);
    // history.push(`/customer/orders${sale.id}`);
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
