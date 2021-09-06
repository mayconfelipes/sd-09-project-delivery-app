import React, { useEffect, useState, useContext } from 'react';
import { getAllSellers, sendOrder } from '../../services/fetchApi';
import * as S from './styled';
import Context from '../../context';

const FormAddressFull = () => {
  const DEFAULT_FORM = {
    sellers: [{ name: 'Buscando vendedores', id: 'nenhum' }],
    selectedSeller: 'Buscando vendedores',
    address: '',
    number: '',
  };

  const { cart } = useContext(Context);
  const [formOrder, setFormOrder] = useState(DEFAULT_FORM);
  const { sellers, selectedSeller, address, number } = formOrder;

  const fetchAllSellers = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const result = await getAllSellers(token);
    setFormOrder({
      ...formOrder,
      sellers: [...result],
      selectedSeller: result[0].name,
    });
  };

  const handleAddressInfo = ({ target: { name, value } }) => {
    setFormOrder({
      ...formOrder,
      [name]: value,
    });
  };

  const handleSeller = ({ target: value }) => {
    setFormOrder({
      ...formOrder,
      selectedSeller: value,
    });
  };

  const submitOrder = async () => {
    const seller = sellers.find((elem) => elem.name === selectedSeller);
    const { token } = JSON.parse(localStorage.getItem('user'));

    const order = {
      sale: {
        sellerId: seller.id,
        deliveryAddress: address,
        deliveryNumber: number,
        totalPrice: cart.totalValue,
      },
      products: cart.products,
    };

    const id = await sendOrder(token, order);
    console.log(id);
  };

  useEffect(() => {
    fetchAllSellers();
  }, []);

  return (
    <S.ContainerFormAddressFull>
      <h1>Detalhes e Endereço para Entrega</h1>
      <S.Form>
        <S.Select
          value={ selectedSeller }
          onChange={ handleSeller }
          data-testId="customer_checkout__select-seller"
        >
          {
            sellers.map((seller) => (
              <option key={ seller.id } value={ seller.name }>{ seller.name }</option>
            ))
          }
        </S.Select>
        <input
          type="text"
          placeholder="Endereço completo"
          name="address"
          value={ address }
          data-testId="customer_checkout__input-address"
          onChange={ handleAddressInfo }
        />
        <input
          type="number"
          placeholder="Número"
          name="number"
          value={ number }
          data-testId="customer_checkout__input-addressNumber"
          onChange={ handleAddressInfo }
        />
      </S.Form>
      <button
        type="button"
        data-testId="customer_checkout__button-submit-order"
        onClick={ submitOrder }
      >
        FINALIZAR PEDIDO
      </button>
    </S.ContainerFormAddressFull>
  );
};

export default FormAddressFull;
