import React, { useState, useEffect } from 'react';
import P from 'prop-types';

import DescriptionsBar from '../../../components/DescriptionsBar';
import GridOrderDetails from '../../../components/GridOrderDetails';
import InfoOrderDetails from '../../../components/InfoOrderDetails';
import NavBar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';
// import useGlobalContext from '../../../context/GlobalStateProvider';
import { saleById } from '../../../api/sales';
import formatDate from '../../../util/formatDate';

import style from './orderDetails.module.scss';

const CustomerOrderDetails = ({ match }) => {
  const { params } = match;
  const { id: paramId } = params;

  const [isLoading, setIsLoading] = useState(true);
  const [sale, setSale] = useState([]);

  // const { totalPrice } = useGlobalContext();
  const sellerTestId = 'customer_order_details__element-order-details-label-seller-name';
  const dateTestId = 'customer_order_details__element-order-details-label-order-date';
  const statusTId = 'customer_order_details__element-order-details-label-delivery-status';
  const orderTestId = 'customer_order_details__element-order-details-label-order-id';
  const deliveryCheckTestId = 'customer_order_details__button-delivery-check';

  useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem('user'));
    if (localItem) {
      saleById(localItem.token)
        .then((data) => {
          setSale(data);
          setIsLoading(false);
        });
    }
  }, []);

  const renderLocalSales = () => (
    <>
      {JSON.parse(localStorage.getItem('cart'))
        .map(({ id, quantity, price, description }, index) => {
          const intPrice = parseFloat(price.replace(',', '.'));
          const multPrice = parseFloat(quantity) * intPrice;
          const totPrice = (Math.round(multPrice * 100) / 100).toFixed(2);
          const toStringNumber = totPrice.toString().replace('.', ',');
          return (
            <DescriptionsBar
              key={ id }
              id={ index }
              userOrProductName={ description }
              emailOrQuantity={ quantity }
              userTypeOrValue={ price }
              deleteOrPrice={ toStringNumber }
              shouldDeleteApear={ false }
              dataTestIdId={
                `customer_order_details__element-order-table-item-number-${index}`
              }
              dataTestIdUserOrProductName={
                `customer_order_details__element-order-table-name-${index}`
              }
              dataTestIdEmailOrQuantity={
                `customer_order_details__element-order-table-quantity-${index}`
              }
              dataTestIdUserTypeOrValue={
                `customer_order_details__element-order-table-sub-total-${index}`
              }
              dataTestIdDeleteOrPrice={
                `customer_order_details__element-order-total-price-${index}`
              }
            />
          );
        })}
      {/*
      <PrimaryButton>
        {`Total R$: ${totalPrice}`}
      </PrimaryButton> */}
    </>
  );

  if (isLoading) return <p>Loading...</p>;
  console.log(sale);
  return (
    <>
      <NavBar />
      <h1>Detalhe do Pedido</h1>
      <div className={ style.totalContainer }>
        <div className={ style.barContainer }>
          {sale && sale
            .map(({
              id, products, saleDate, totalPrice, status, seller }, productIndex) => {
              if (id === Number(paramId)) {
                const { name: sellerName } = seller;
                const newDate = formatDate(saleDate);
                const priceToString = totalPrice.toString().replace('.', ',');
                return (
                  <div>
                    <InfoOrderDetails
                      shouldOrderStatusApear={ false }
                      shouldSellerApear
                      dispatchCheckDisabled
                      dataTestIdOrderId={ orderTestId }
                      dataTestIdSeller={ sellerTestId }
                      dataTestIdOrderDate={ dateTestId }
                      dataTestIdDeliveryStatus={ statusTId }
                      dataTestIdDeliveryCheck={ deliveryCheckTestId }
                      order={ ` 000${id}` }
                      sellerName={ `${sellerName}` }
                      date={ newDate }
                      deliveryStatus={ status }
                      deliveryCheck="MARCAR COMO ENTREGUE"
                    />
                    <GridOrderDetails />
                    ;
                    {products.length > 0 ? products.map((
                      { id: productId, name, price, SalesProducts }, i,
                    ) => {
                      const { quantity } = SalesProducts;
                      const productsPrice = price * quantity;
                      const priceRound = (Math
                        .round(productsPrice * 100) / 100).toFixed(2);
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
                            `customer_order_details__element-order-table-item-number-${i}`
                          }
                          dataTestIdUserOrProductName={
                            `customer_order_details__element-order-table-name-${id}`
                          }
                          dataTestIdEmailOrQuantity={
                            `customer_order_details__element-order-table-quantity-${i}`
                          }
                          dataTestIdUserTypeOrValue={
                            `customer_order_details__element-order-table-sub-total-${i}`
                          }
                          dataTestIdDeleteOrPrice={
                            `customer_order_details__element-order-total-price-${i}`
                          }
                        />
                      );
                    }) : renderLocalSales()}
                    <PrimaryButton
                      dataTestId="customer_order_details__element-order-total-price"
                    >
                      {`Total R$: ${priceToString}`}
                    </PrimaryButton>
                  </div>
                );
              }
              return null;
            })}

        </div>

      </div>
    </>
  );
};

export default CustomerOrderDetails;

CustomerOrderDetails.propTypes = {
  match: P.shape({
    params: P.shape({
      id: P.string,
    }),
  }).isRequired,
};
