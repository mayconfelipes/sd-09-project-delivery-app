import React from 'react';
import PropTypes from 'prop-types';

function TableOrderDetails({
  orderId,
  sellerName,
  orderDate,
  orderStatus,
  totalPrice,
}) {
  const dtid40 = 'customer_order_details__element-order-details-label-delivery-status';
  const statusClasses = (sts) => {
    if (sts === 'Pendente') return 'pending';
    if (sts === 'Preparando') return 'preparing';
    if (sts === 'Entregue') return 'done';
  };

  return (
    <div>
      <div className="order-details-table-header">
        <p data-testid="customer_order_details__element-order-details-label-order-id">
          {`PEDIDO ${orderId}`}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-seller-name">
          {`P. Vend: ${sellerName}`}
        </p>
        <p data-testid="customer_order_details__element-order-details-label-order-date">
          { orderDate }
        </p>
        <p
          data-testid={ dtid40 }
          className={ statusClasses(orderStatus) }
        >
          { orderStatus }
        </p>
        <button type="button" data-testid="customer_order_details__button-delivery-check">
          MARCAR COMO ENTREGUE
        </button>
      </div>
      <div>
        <table>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor Unitário</td>
            <td>Sub-total</td>
          </tr>
          {/* { items.map((item, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                { index }
              </td>
              <td
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                { itemName }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                { item.quantity }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                {`R$ ${itemPrice}`}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                { `R$ ${itemSubTotal}` }
              </td>
            </tr>
          ))} */}
        </table>
        <h2
          data-testid="seller_order_details__element-order-total-h2rice"
        >
          {`Total ${totalPrice}`}
        </h2>
      </div>
    </div>
  );
}

TableOrderDetails.propTypes = {
  sale: PropTypes.array,
}.isRequired;

export default TableOrderDetails;
