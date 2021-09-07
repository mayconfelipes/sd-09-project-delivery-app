import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import NavBar from '../../../components/NavBar';

const Details = () => {
  const [sale, setSale] = useState('');
  const [checkDisable] = useState(true);

  const { id } = useParams();
  const prefixButton = 'seller_order_details__button-';
  const prefix = 'seller_order_details__element-order-';

  const fetchDetails = async (saleId) => {
    try {
      const response = await fetch(`http://localhost:3001/sales_products/${saleId}`);
      const saleById = await response.json();
      setSale(saleById);
      console.log(saleById);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetails(id);
    console.log('loop');
  }, [id]);

  const renderTable = (arr) => arr.map((item, index) => (
    <div key={ index }>
      <section className="seller-card-parte-de-cima">
        <div
          className="seller-itens"
          data-testid={ `${prefix}table-item-number${index}` }
        />
        {item.saleId}
      </section>
      <section className="seller-card-parte-de-baixo">
        <div
          className="seller-endereço"
          data-testid={ `${prefix}table-card-address-${item.saleId}` }
        >
          {item.delivery_address}
        </div>
      </section>
    </div>
  ));
  const getTotalPrice = (price) => price.split('.').join(',');
  const getDate = (date) => {
    const newDate = new Date(date);
    return `0${newDate.getDate()}/0${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  };
  return (
    <div>

      <NavBar />
      <div className="details-card">
        <section className="seller-card-parte-de-cima">
          <div className="seller-itens" data-testid={ `${prefix}details-label-order-id` }>
            Nº
            {id}
          </div>
          <div
            className="seller-itens"
            data-testid={ `${prefix}details-label-order-date` }
          >
            {sale && getDate(sale[0].sale.sale_date)}
          </div>
          <div
            className="seller-itens"
            data-testid={ `${prefix}details-label-delivery-status` }
          >
            <div className="seller-page-status">
              Pendente
            </div>
          </div>
          <button
            type="button"
            className="seller-itens"
            data-testid={ `${prefixButton}preparing-check` }
          >
            Preparar Pedido
          </button>
          <button
            type="button"
            className="seller-itens"
            data-testid={ `${prefixButton}dispatch-check` }
            disabled={ checkDisable }
          >
            Saiu Para Entrega
          </button>
        </section>
        {sale ? <>{renderTable(sale)}</> : (
          <Loading />
        )}
        <div className="seller-itens">
          <div
            className="seller-itens"
            data-testid={ `${prefix}total-price` }
          >
            {sale && getTotalPrice(sale[0].sale.totalPrice)}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Details;
