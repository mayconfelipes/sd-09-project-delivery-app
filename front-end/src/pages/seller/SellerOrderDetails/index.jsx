import React, { useState, useEffect } from 'react';
import P from 'prop-types';

import DescriptionsBar from '../../../components/DescriptionsBar';
import GridOrderDetails from '../../../components/GridOrderDetails';
import InfoOrderDetails from '../../../components/InfoOrderDetails';
import NavBar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';
import formatDate from '../../../util/formatDate';

import { getOneSaleBySaleId } from '../../../api/sales';

import style from './sellerOrderDetails.module.scss';

const SellerOrderDetails = ({ match }) => {
  const { params } = match;
  const { id: paramId } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [sale, setSale] = useState([]);

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem('user'));
    if (localItem) {
      getOneSaleBySaleId(paramId, localItem.token)
        .then((data) => {
          setSale(data);
          setIsLoading(false);
        });
    }
  }, [paramId]);

  const idTestId = 'seller_order_details__element-order-details-label-order-id';
  const dateTestId = 'seller_order_details__element-order-details-label-order-date';
  const statusTId = 'seller_order_details__element-order-details-label-delivery-status';
  const preparingCheckTestId = 'seller_order_details__button-preparing-check';
  const dispatchCheckTestId = 'seller_order_details__button-dispatch-check';
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <NavBar orders="" products="PEDIDOS" />
      <h1>Detalhe do Pedido (Área vendedor)</h1>
      <div className={ style.totalContainer }>
        {sale.map(({ id, status, saleDate, totalPrice, products }, index) => {
          const newDate = formatDate(saleDate);
          const priceToString = totalPrice.toString().replace('.', ',');
          if (id === Number(paramId)) {
            return (
              <div key={ index }>
                <InfoOrderDetails
                  shouldSellerApear={ false }
                  shouldOrderStatusApear
                  shouldCustomerDeliverApear={ false }
                  order={ id }
                  deliveryStatus={ status }
                  date={ newDate }
                  orderStatus="PREPARAR PEDIDO"
                  deliveryCheck="SAIU PARA ENTREGA"
                  dataTestIdOrderId={ idTestId }
                  dataTestIdOrderDate={ dateTestId }
                  dataTestIdDeliveryStatus={ statusTId }
                  dataTestIdPreparingCheck={ preparingCheckTestId }
                  dataTestIdDeliveryCheck={ dispatchCheckTestId }
                  dispatchCheckDisabled
                />
                <div key={ id } className={ style.barContainer }>
                  <GridOrderDetails />
                  {products.map((
                    { id: productId, name, price, SalesProducts }, productIndex,
                  ) => {
                    const { quantity } = SalesProducts;
                    const productsPrice = price * quantity;
                    const priceRound = (Math.round(productsPrice * 100) / 100).toFixed(2);
                    const totalPriceString = priceRound.toString().replace('.', ',');
                    const priceString = price.toString().replace('.', ',');
                    return (
                      <DescriptionsBar
                        key={ productId }
                        id={ productIndex }
                        userOrProductName={ name }
                        emailOrQuantity={ quantity }
                        userTypeOrValue={ priceString }
                        deleteOrPrice={ totalPriceString }
                        shouldDeleteApear={ false }
                        dataTestIdId={
                          `seller_order_details__element-order-table-item-number-${id}`
                        }
                        dataTestIdUserOrProductName={
                          `seller_order_details__element-order-table-name-${id}`
                        }
                        dataTestIdEmailOrQuantity={
                          `seller_order_details__element-order-table-quantity-${id}`
                        }
                        dataTestIdUserTypeOrValue={
                          `seller_order_details__element-order-table-unit-price-${id}`
                        }
                        dataTestIdDeleteOrPrice={
                          `seller_order_details__element-order-table-sub-total-${id}`
                        }
                      />
                    );
                  })}
                </div>
                <PrimaryButton
                  dataTestId="seller_order_details__element-order-total-price"
                >
                  Total R$:
                  {' '}
                  {priceToString}
                </PrimaryButton>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>

  );
};

export default SellerOrderDetails;

SellerOrderDetails.propTypes = {
  match: P.shape({
    params: P.shape({
      id: P.string,
    }),
  }).isRequired,
};
