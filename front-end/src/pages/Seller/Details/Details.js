import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
// import './Seller.css';

const Details = () => {
  const [sale, setSale] = useState();
  // const prefixId = 'seller_orders__element-order-date-';
  const { id } = useParams();
  const prefix = ' seller_orders__element-';
  const fetchDetails = async (saleId) => {
    try {
      const response = await fetch(`http://localhost:3001/sales/${saleId}`);
      const saleById = await response.json();
      setSale(saleById);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDetails(id);
    console.log('loop');
  }, [id]);

  // const redirectToDetails = (id) => {
  //   history.push(`/seller/orders/${id}`);
  // };
  const renderTable = (obj) => (
    <div>
      <div data-test-id={ `${prefix}order-id` }>
        { obj.id}
      </div>
      <div>
        { obj.user_id}
      </div>
      <div>
        { obj.seller_id}
      </div>
      <div data-test-id={ `${prefix}card-price` }>
        { obj.total_price}
      </div>
      <div data-test-id={ `${prefix}card-address` }>
        { obj.delivery_address}
      </div>
      <div>
        { obj.delivery_number}
      </div>
      <div data-test-id={ `${prefix}order-date` }>
        { obj.sale_date}
      </div>
    </div>
  );

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
      {sale ? <>{renderTable(sale)}</> : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
