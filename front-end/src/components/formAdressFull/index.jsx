import React, { useEffect, useState } from 'react';
import { getAllSellers } from '../../services/fetchApi';
import * as S from './styled';

const FormAdressFull = () => {
  const DEFAULT_FORM = {
    sellers: [{ name: 'Buscando vendedores', id: 'nenhum' }],
    selectedSeller: 'Buscando vendedores',
    adress: '',
    number: '',
  };

  const [form, setForm] = useState(DEFAULT_FORM);
  const { sellers, selectedSeller, adress, number } = form;

  const fetchAllSellers = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const result = await getAllSellers(token);
    setForm({
      ...form,
      sellers: [...result],
    });
  };

  const handleAdressInfo = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSeller = ({ target: value }) => {
    setForm({
      ...form,
      selectedSeller: value,
    });
  };

  useEffect(() => {
    fetchAllSellers();
  }, []);

  return (
    <S.ContainerFormAdressFull>
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
          name="adress"
          value={ adress }
          data-testId="customer_checkout__input-address"
          onChange={ handleAdressInfo }
        />
        <input
          type="number"
          placeholder="Número"
          name="number"
          value={ number }
          data-testId="customer_checkout__input-addressNumber"
          onChange={ handleAdressInfo }
        />
      </S.Form>
      <button
        type="button"
        data-testId="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </S.ContainerFormAdressFull>
  );
};

export default FormAdressFull;
