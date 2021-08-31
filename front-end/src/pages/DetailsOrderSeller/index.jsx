import React, { useEffect, useState } from 'react';
import { shape } from 'prop-types';
import moment from 'moment';
import io from '../../socket';
import api from '../../service/axiosApi';
import NotFound from '../../components/NotFound';
import './DetailsOrderSeller.css';
import ProductCardlist from '../../components/ProductCardList';

const DetailsOrderSeller = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState('');

  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    api
      .get(`/order/${id}`, { headers: { authorization: token } })
      .then((result) => {
        setOrder(result.data[0]);
        setOrderStatus(result.data[0].status);
      })
      .catch((err) => console.log(err));
  }, [id, token]);

  const handleStatus = ({ target: { name } }) => {
    io.emit('updateOrders', { id: order.id, status: name });
  };

  useEffect(() => {
    io.on('updateStatus', ({ status, id: idStatus }) => {
      if (idStatus === order.id) setOrderStatus(status);
    });
  });

  const dataTestButtonPrepare = 'seller_order_details__button-preparing-check';
  const dataTestButtonSend = 'seller_order_details__button-dispatch-check';

  if (orderStatus === '') return <NotFound />;

  return (
    <div>
      <div className="details-order-container">
        <span>
          PEDIDO:
          {order.id}
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          { moment(order.sale_date).format('L')}
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {orderStatus}
        </span>
        <button
          data-testid={ dataTestButtonPrepare }
          name="Preparando"
          type="submit"
          onClick={ handleStatus }
        >
          PREPARAR PEDIDO
        </button>
        <button
          data-testid={ dataTestButtonSend }
          name="Em Trânsito"
          type="submit"
          onClick={ handleStatus }
        >
          SAIU PARA ENTREGA
        </button>
        <ul>
          { (order) && order.product
            .map((prod, i) => (
              <ProductCardlist product={ prod } key={ i } index={ i + 1 } />
            )) }
        </ul>
        <p data-testid="seller_order_details__element-order-total-price">
          Total: &nbsp;
          { order.totalPrice }
        </p>
      </div>

    </div>
  );
};

// - 55: seller_order_details__element-order-details-label-delivery-status
// - 56: seller_order_details__element-order-details-label-order-date
// - 57: seller_order_details__button-preparing-check
// - 58: seller_order_details__button-dispatch-check
// - 59: seller_order_details__element-order-table-item-number-\<index>
// - 60: seller_order_details__element-order-table-name-\<index>
// - 61: seller_order_details__element-order-table-quantity-\<index>
// - 62: seller_order_details__element-order-table-unit-price-\<index>
// - 63: seller_order_details__element-order-table-sub-total-\<index>
// - 64: seller_order_details__element-order-total-price

DetailsOrderSeller.propTypes = {
  match: shape().isRequired,
};

export default DetailsOrderSeller;
