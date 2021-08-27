import React from 'react';
import { Link } from 'react-router-dom';

import DescriptionsBar from '../../../components/DescriptionsBar';
import Navbar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';
import Input from '../../../components/Input';
import GridOrderDetails from '../../../components/GridOrderDetails';

import style from './checkout.module.scss';

const Checkout = () => {
  const id = 1;
  const index = 0;
  return (
    <>
      <Navbar />
      <h1>Finalizar Pedido</h1>
      <div className={ style.totalContainer }>
        <GridOrderDetails shouldRemoveItemApear />
        <div className={ style.barContainer }>
          <DescriptionsBar
            id="1"
            userOrProductName="Cerveja heineken"
            emailOrQuantity="2"
            userTypeOrValue="R$ 2,40"
            deleteOrPrice="R$ 4,80"
            shouldDeleteApear
            dataTestIdId={ `customer_checkout__element-order-table-item-number-${index}` }
            dataTestIdUserOrProductName={
              `customer_checkout__element-order-table-name-${index}`
            }
            dataTestIdEmailOrQuantity={
              `customer_checkout__element-order-table-quantity-${index}`
            }
            dataTestIdUserTypeOrValue={
              `customer_checkout__element-order-table-unit-price-${index}`
            }
            dataTestIdDeleteOrPrice={
              `customer_checkout__element-order-table-remove-${index}`
            }
          />
        </div>
        <PrimaryButton
          dataTestId="customer_checkout__element-order-total-price"
        >
          Total: R$ 4,80

        </PrimaryButton>
      </div>
      <h2>Detalhes e Endereço para a Entrega</h2>

      <form className={ style.formDataContainer }>
        <label htmlFor="orderData">
          P. Vendedora Responsável
          <select data-testid="customer_checkout__select-seller" id="orderData">
            <option value="Fulana1">Fulana1</option>
            <option value="Fulana2">Fulana2</option>
            <option value="Fulana3">Fulana3</option>
            <option value="Fulana4">Fulana4</option>
          </select>
        </label>
        <Input
          labelDescription="Endereço"
          dataTestId="customer_checkout__input-address"
        />
        <Input
          labelDescription="Número"
          dataTestId="customer_checkout__input-addressNumber"
        />
        <div className={ style.checkoutButton }>
          <Link to={ `/customer/orders/${id}` }>
            <PrimaryButton
              dataTestId="customer_checkout__button-submit-order"
            >
              FINALIZAR PEDIDO
            </PrimaryButton>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Checkout;
