import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import formatDate from '../../services/formatDate';
import salesOrdersAPI from '../../services/salesDetailsAPI';

const renderProducts = (products, user) => (
  products.map((product, index) => (
    <section key={ product.id }>
      <p
        className="item-number"
        data-testid={
          `${user}_order_details__element-order-table-item-number-${index}`
        }
      >
        {product.id}
      </p>
      <p
        className="item-name"
        data-testid={ `${user}_order_details__element-order-table-name-${index}` }
      >
        {product.name}
      </p>
      <div
        className="quantity"
        data-testid={ `${user}_order_details__element-order-table-quantity-${index}` }
      >
        {product.salesProducts.quantity}
      </div>
      <div
        className="unit-price"
        data-testid={ `${user}_order_details__element-order-table-unit-price-${index}` }
      >
        Preço unitario: R$
        {product.price}
      </div>
      <div
        className="total-price"
        data-testid={ `${user}_order_details__element-order-table-sub-total-${index}` }
      >
        Sub total :R$
        {product.salesProducts.quantity * product.price}
      </div>
    </section>
  ))
);

const renderDetails = (MockSalesDB, user) => (
  MockSalesDB.map((sale) => (
    <div key={ sale.id } className="card-sale">
      <p>Pedido</p>
      {sale.id}
      <div
        className="date-sale"
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {formatDate(sale.saleDate)}
      </div>
      <div
        className="status-sale"
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {sale.status}
      </div>
      <div
        className="status-sale"
        data-testid="seller_order_details__button-preparing-check"
      >
        PREPARAR PEDIDO
      </div>
      <div
        className="status-sale"
        data-testid="seller_order_details__button-dispatch-check"
      >
        SAIU PARA ENTREGA
      </div>
      {renderProducts(sale.products, user)}
      <div
        className="total-price"
        data-testid="seller_order_details__element-order-total-price"
      >
        {`Total: ${sale.totalPrice}`}
      </div>
    </div>

  ))
);

export default function Sales() {
  const location = useLocation();

  const user = location.pathname.includes('seller') ? 'seller' : 'customer';

  const [MockSalesDB, setMockSalesDB] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    salesOrdersAPI(id)
      .then((response) => {
        setMockSalesDB(response);
        setIsLoading(false);
      });
  }, [id]);

  return isLoading ? <p>Loading...</p> : renderDetails(MockSalesDB, user);
}
