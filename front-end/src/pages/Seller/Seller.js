import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading';
import './Seller.css';
import NavBar from '../../components/NavBar';

const Seller = () => {
  const [sales, setSales] = useState([]);
  const prefixId = 'seller_orders__element-order-date-';
  const prefix = 'seller_orders__element-';

  const fetchDrinks = async () => {
    try {
      const response = await fetch('http://localhost:3001/sales');
      const allSales = await response.json();
      setSales(allSales);
    } catch (error) {
      console.error(error);
    }
  };

  const history = useHistory();

  const redirectToDetails = (id) => {
    history.push(`/seller/orders/${id}`);
  };
  const renderTable = (arr) => arr.map((item) => (
    <div
      className="seller-card"
      key={ item.id }
      data-testid={ `${prefixId}${item.id}` }
      onClick={ () => redirectToDetails(item.id) }
      onKeyDown={ () => redirectToDetails(item.id) }
      role="link"
      tabIndex={ 0 }
    >
      <section className="seller-card-parte-de-cima">
        <div className="seller-itens">
          Nº
          {item.id}
        </div>
        <div className="seller-itens">
          <div
            className="seller-itens"
            data-testid={ `${prefix}delivery-status-${item.id}` }
          >
            <div className="seller-page-status">
              Pendente
            </div>
          </div>
        </div>
        <div className="seller-data-e-preço">
          <div className="seller-itens">
            <div
              className="seller-itens"
              data-testid={ `${prefix}order-date-${item.id}` }
            />
            {item.sale_date}
          </div>
          <div className="seller-itens">
            <div
              className="seller-itens"
              data-testid={ `${prefix}card-price-${item.id}` }
            />
            {item.total_price}
          </div>
        </div>
      </section>
      <section className="seller-card-parte-de-baixo">
        <div
          className="seller-endereço"
          data-testid={ `${prefix}card-address-${item.id}` }
        >
          {item.delivery_address}
        </div>
      </section>
    </div>
  ));

  useEffect(() => {
    fetchDrinks();
    console.log('loop');
  }, []);

  return (
    <div>
      <NavBar />
      {sales ? <>{renderTable(sales)}</> : (
        <Loading />
      )}
    </div>
  );
};

export default Seller;
