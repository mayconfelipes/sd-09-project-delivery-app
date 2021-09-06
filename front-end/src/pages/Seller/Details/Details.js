import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import NavBar from '../../../components/NavBar';

const Details = () => {
  const [sale, setSale] = useState();

  const { id } = useParams();
  const prefixOrder = 'seller_order_details__element-order-details-label-';
  const prefixButton = 'seller_order_details__button-';
  const prefixTable = 'seller_order_details__element-order-table-';
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
      <div className="seller-data-e-preço">
        <div className="seller-itens">
          <div
            className="seller-itens"
            data-testid={ `${prefixTable}item-number${index}` }
          />
          {item.saleId}
        </div>
      </div>
      <section className="seller-card-parte-de-baixo">
        <div
          className="seller-endereço"
          data-testid={ `${prefixTable}card-address-${item.saleId}` }
        >
          {item.delivery_address}
        </div>
      </section>
    </div>
  ));

  //   <div
  //     className="seller-card"
  //     key={ item.sale_id }
  //     data-testid={ `${prefixId}${item.sale_id}` }
  //     onClick={ () => redirectToDetails(item.sale_id) }
  //     onKeyDown={ () => redirectToDetails(item.sale_id) }
  //     role="link"
  //     tabIndex={ 0 }
  //   >
  //     <div className="seller-itens">
  //       Nº
  //       {item.sale_id}
  //     </div>
  //     <div className="seller-itens">
  //       <div className="seller-itens">
  //         <p>
  //           Produto:
  //         </p>
  //       </div>
  //       {item.product_id}
  //     </div>
  //     <div className="seller-itens">
  //       <div className="seller-itens">
  //         <p>
  //           Quantidade:
  //         </p>
  //       </div>
  //       {item.quantity}
  //     </div>
  //   </div>
  // ));
  return (
    <div>
      <NavBar />
      <section className="seller-card-parte-de-cima">
        <div className="seller-itens" data-testid={ `${prefixOrder}order-id` }>
          Nº
          {id}
        </div>
        <div className="seller-itens">
          <div
            className="seller-itens"
            data-testid={ `${prefixOrder}order-date` }
          />
          {/* {item.sale_date} */}
        </div>
        <div className="seller-itens">
          <div
            className="seller-itens"
            data-testid={ `${prefixOrder}delivery-status` }
          >
            <div className="seller-page-status">
              Pendente
            </div>
          </div>
        </div>
        <div className="seller-itens">
          <button
            type="button"
            className="seller-itens"
            data-testid={ `${prefixButton}preparing-check` }
          >
            Preparar Pedido
          </button>
        </div>
        <div className="seller-itens">
          <button
            type="button"
            className="seller-itens"
            data-testid={ `${prefixButton}dispatch-check` }
          >
            Saiu Para Entrega
          </button>
        </div>
      </section>
      {sale ? <>{renderTable(sale)}</> : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
