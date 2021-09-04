import React, { useEffect, useState } from 'react';
import { shape } from 'prop-types';
import moment from 'moment';
import io from '../../socket';
import api from '../../service/axiosApi';
import NotFound from '../../components/NotFound';
import ProductCardlist from '../../components/ProductCardList';
import NavBar from '../../components/Navbar';
import './DetailsOrderCustomer.css';

const DetailsOrderCustomer = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [order, setOrder] = useState({});
  const [orderStatus, setOrderStatus] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const { token, role } = JSON.parse(localStorage.getItem('user'));

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

  useEffect(() => {
    if (orderStatus !== 'Em Trânsito') {
      return setDisableButton(true);
    }

    setDisableButton(false);
  }, [orderStatus]);

  const dTidStat = 'customer_order_details__element-order-details-label-delivery-status';

  if (orderStatus === '') return <NotFound />;

  const renderInfoPedidos = () => (
    <div className="render-info-pedidos">
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        PEDIDO:
        {order.id}
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        P.Vend: &nbsp;
        { order.seller.name }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { moment(order.sale_date).format('DD/MM/YYYY')}
      </span>
      <span
        data-testid={ dTidStat }
        className={ `status-details ${orderStatus}` }
      >
        {orderStatus}
      </span>
    </div>
  );

  const renderButtosStatus = () => (
    <div>
      <button
        data-testid="customer_order_details__button-delivery-check"
        name="Entregue"
        type="submit"
        disabled={ disableButton }
        onClick={ handleStatus }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );

  return (
    <div>
      <NavBar />
      <div className="details-order-seller-container">
        <h3>Detalhe do Pedido</h3>
        <div className="details-order-container">
          <section>
            { renderInfoPedidos() }
            { renderButtosStatus() }
          </section>
          <li className="list-item-header">
            <span>
              item
            </span>
            <span>
              Descrição
            </span>
            <span>
              Quantidade
            </span>
            <span>
              Valor Unitário
            </span>
            <span>
              Sub-total
            </span>
          </li>
          <ul>
            { (order) && order.product
              .map((prod, i) => (
                <ProductCardlist
                  role={ role }
                  product={ prod }
                  key={ i }
                  index={ i + 1 }
                />
              )) }
          </ul>
          <p data-testid="customer_order_details__element-order-total-price">
            Total: &nbsp;
            { order.totalPrice.toString().replace(/\./, ',') }
          </p>
        </div>
      </div>
    </div>
  );
};

DetailsOrderCustomer.propTypes = {
  match: shape().isRequired,
};

export default DetailsOrderCustomer;
