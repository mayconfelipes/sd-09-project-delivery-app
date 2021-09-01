import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    api.get('product').then((res) => setProducts(res.data));
    api.get('user').then((res) => setUser(res.data));
  }, []);

  console.log(user);
  console.log(products);
  console.log(salesDetails);

  const removeProductOnClick = (id) => {
    setProducts(products.filter((product) => id !== product.id));
  };

  const productsTbobyRender = () => products.map((product, index) => (
    <tr key={ `${product.id}` }>
      <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
        {index + 1}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
        {product.name}
      </td>
      <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
        Quantidade carrinho
      </td>
      <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
        {product.price}
      </td>
      <td data-testid={ `checkout__element-order-table-sub-total-${index}` }>
        Sub total carrinho
      </td>
      <td>
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ () => removeProductOnClick(product.id) }
        >
          Remover
        </button>
      </td>
    </tr>
  ));

  const cartTableRender = () => (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>{ productsTbobyRender() }</tbody>
    </table>
  );

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

  return (
    <div>
      <h2>Finalizar pedido</h2>
      {cartTableRender()}
      <h1 className="tp" data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${products.length === 0 ? 0.00 : products[0].price}`}
      </h1>
      <hr />
      <h3>Detalhes do pedido para entrega</h3>
      {detailsAndAdressRender()}
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
        onClick={ () => api.post('/sale', salesDetails) }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default Checkout;
