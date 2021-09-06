import React, { useContext, useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';
import ProductsContext from '../context/ProductsContext';

const Checkout = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const history = useHistory();

  const [sellers, setSellers] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem('total')) || 0);
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerId, setSelletId] = useState('');
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [error, setError] = useState('');

  const renderSellersDropdown = () => (
    <select
      name="employees"
      id="seller"
      data-testid="customer_checkout__select-seller"
      onChange={ (e) => setSelletId(e.target.value) }
    >
      <option value="">Selecione uma pessoa vendedora</option>
      {
        sellers.map(({ id, name }) => (
          <option value={ id } key={ name }>{name}</option>
        ))
      }
    </select>
  );

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'address':
      return setDeliveryAddress(value);
    case 'number':
      return setDeliveryNumber(value);
    default:
      return '';
    }
  };

  useEffect(
    () => {
      if (user) {
        const fetchSellers = async () => {
          const GET_SELLERS_ENDPOINT = 'http://localhost:3001/api/users';
          const config = {
            headers: { Authorization: `${user.token}` },
          };

          await axios.get(GET_SELLERS_ENDPOINT, config)
            .then(
              ({ data }) => setSellers(data),
              () => setError('Falha ao listar pessoas vendedoras'),
            );
        };
        fetchSellers();
      }
    }, [user],
  );

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

  const submitSale = async () => {
    const POST_SALE_ENDPOINT = 'http://localhost:3001/api/sales';
    const payload = {
      userId: user.id,
      sellerId,
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente',
      products,
    };
    const config = {
      headers: { Authorization: `${user.token}` },
    };

    await axios.post(POST_SALE_ENDPOINT, payload, config)
      .then(
        ({ data: { id } }) => history.push(`/customer/orders/${id}`),
        () => setError('Falha ao criar pedido D='),
      );
  };

  if (!user) {
    localStorage.clear();
    return (<Redirect
      to={ {
        pathname: '/login',
        state: {
          error: 'Você não tem permissão para accessar essa página!',
        },
      } }

    />);
  }

  return (
    <section className="checkout">
      <Header />
      <h2 className="checkout-order">Finalizar Pedido</h2>
      {
        error.length > 0
        && <span>{error}</span>
      }
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Subtotal</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <tbody>
          { products.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                { product.name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                { product.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { product.price.replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {
                  parseFloat(product.price * product.quantity)
                    .toFixed(2).replace('.', ',')
                }
              </td>
              <td>
                <button
                  type="button"
                  onClick={
                    () => handleClick(product.id, product.price, product.quantity)
                  }
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  REMOVER
                </button>
              </td>
            </tr>
          )) }
        </tbody>

      </table>
      <section>
        <span
          className="total"
          data-testid="customer_checkout__element-order-total-price"
        >
          Total: R$
          { parseFloat(total).toFixed(2).replace('.', ',') }
        </span>
      </section>
      <h2 className="checkout-details">Detalhes e Endereço para Entrega</h2>
      <section className="details">
        <label htmlFor="seller">
          P.Vendedora Responsável:
          { renderSellersDropdown() }
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
        onClick={ submitSale }
      >
        Finalizar pedido
      </button>
    </section>
  );
};

export default Checkout;
