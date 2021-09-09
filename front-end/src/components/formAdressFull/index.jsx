import React, { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { getAllSellers, sendOrder } from '../../services/fetchApi';
import * as S from './styled';
import Context from '../../context';

const FormAddressFull = () => {
  const DEFAULT_FORM = {
    address: '',
    number: '',
    seller: 2,
  };

  const { cart } = useContext(Context);
  const [formOrder, setFormOrder] = useState(DEFAULT_FORM);
  const [redirect, setRedirect] = useState(false);
  const { seller, address, number } = formOrder;
  const [allSellers, setAllSellers] = useState([]);
  const [orderId, setOrderId] = useState();

  const fetchAllSellers = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const result = await getAllSellers(token);
    setAllSellers(result);
    setFormOrder({
      ...formOrder,
      seller: result[0].id,
    });
  };

  const handleAddressInfo = ({ target: { name, value } }) => {
    setFormOrder({
      ...formOrder,
      [name]: value,
    });
  };

  const submitOrder = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const order = {
      sale: {
        deliveryAddress: address,
        deliveryNumber: number,
        sellerId: seller,
        totalPrice: cart.totalValue,
      },
      products: cart.products,
    };

    const { id } = await sendOrder(token, order);

    localStorage.setItem('cart', JSON.stringify({ products: [], totalValue: 0 }));

    setOrderId(id);
    setRedirect(true);
  };

  useEffect(() => {
    fetchAllSellers();
  }, []);

  return (
    <S.ContainerFormAddressFull>
      {
        redirect && <Redirect to={ `/customer/orders/${orderId}` } />
      }
      <h1>Detalhes e Endereço para Entrega</h1>
      <S.Form>
        <S.Select
          value={ seller }
          name="select"
          onChange={ handleAddressInfo }
          data-testid="customer_checkout__select-seller"
        >
          {
            allSellers.map((item) => (
              <option key={ item.id } value={ item.id }>{ item.name }</option>
            ))
          }
        </S.Select>
        <input
          type="text"
          placeholder="Endereço completo"
          name="address"
          value={ address }
          data-testid="customer_checkout__input-address"
          onChange={ handleAddressInfo }
        />
        <input
          type="number"
          placeholder="Número"
          name="number"
          value={ number }
          data-testid="customer_checkout__input-addressNumber"
          onChange={ handleAddressInfo }
        />
      </S.Form>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => submitOrder() }
      >
        FINALIZAR PEDIDO
      </button>
    </S.ContainerFormAddressFull>
  );
};

export default FormAddressFull;
