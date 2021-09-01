import React, { useState, useEffect } from 'react';
import Loading from '../../components/Loading';
import './Seller.css';

const Seller = () => {
  const [sales, setSales] = useState([]);
  const prefixId = 'seller_orders__element-order-date-';
  const fetchDrinks = async () => {
    try {
      const response = await fetch('http://localhost:3001/sales');
      const allSales = await response.json();
      setSales(allSales);
    } catch (error) {
      console.error(error);
    }
  };

  const renderTable = (arr) => arr.map((item) => (
    <div className="seller-card" key={ item.id } data-testid={ `${prefixId}${item.id}` }>
      <div className="seller-itens">
        Nº
        {item.id}
      </div>
      {/* <td>
        User Id
        {item.user_id}
      </td>
      <td>
        Seller Id
        {item.seller_id}
      </td>
      <td>
        Total Price
        {item.total_price}
      </td>
      <td>
        Addres
        {item.delivery_address}
      </td>
      <td>
        Number
        {item.delivery_number}
      </td> */}
      <div className="seller-itens">
        <div className="seller-itens">
          Dia
        </div>
        {item.sale_date}
      </div>
    </div>
  ));

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div>
      {sales ? <>{renderTable(sales)}</> : (
        <Loading />
      )}
    </div>
  );
};

export default Seller;
