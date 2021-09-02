import React, { useState, useEffect } from 'react';
import TableProducts from '../Components/TableProducts';
// import { useHistory } from 'react-router-dom';
import api from '../services/api';
// import Provider from '../context/Provider';

function Checkout() {
  // const { cart, setCart } = useContext(Provider);
  // const [seller, setSeller] = ('Fulana Pereira');
  const [salesDetails, setSalesDetails] = useState({
    userId: 1,
    sellerId: 1,
    totalPrice: 100,
    deliveryAdress: '',
    deliveryNumber: 0,
    status: 'pendente',
    saleDate: Date.now() });
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    api.get('product').then((res) => setProducts(res.data));
    api.get('user').then((res) => setUser(res.data));
  }, []);

  console.log(user);
  console.log(products);
  console.log(salesDetails);

  const dropDownSellers = () => (
    <select value="Fulana Pereira" data-testid="customer_checkout__select-seller">
      <option value="Fulana Pereira">Fulana Pereira</option>
    </select>
  );

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
          <td>{dropDownSellers()}</td>
          <td>
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              onChange={
                ({ target }) => setSalesDetails({ deliveryAdress: target.value })
              }
            />
          </td>
          <td>
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="text"
              onChange={
                ({ target }) => setSalesDetails({ deliveryNumber: target.value })
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
  );

  const finishOrder = async () => {
    await api.post('/sale', salesDetails);
    // history.push(`/customer/orders${sale.id}`);
  };

  return (
    <div>
      {/* <NavBar /> */}
      <h2>Finalizar pedido</h2>
      <TableProducts products={ products } />
      <h1 className="tp" data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${products.length === 0 ? 0.00 : products[0].price}`}
      </h1>
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
