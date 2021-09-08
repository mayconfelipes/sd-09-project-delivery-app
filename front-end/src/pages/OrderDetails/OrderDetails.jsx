import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import DetailsItem from '../../components/DetailsItem';

const OrderDetails = () => {
  const id40 = 'customer_order_detailselement-order-details-label-delivery-status';
  const [cartItens, setCartItens] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  // const [ordersInfo, setOrdersInfo] = useState();
  // const fetchSalesInfo = async () => {
  //   const info = await fetch('http://localhost:3001/sales');
  // };
  // const fetchOrderInfo = async (id) => {
  //   const response = await fetch(`http://localhost:3001/customer/orders/${id}`);
  //   const info = await response.json();
  //   return info;
  //   // setOrdersInfo(info);
  // };

  useEffect(() => {
    const getItens = JSON.parse(localStorage.getItem('products'));
    const itensArray = Object.keys(getItens).map((key) => ({
      item: {
        ...getItens[key],
        name: key,
      },
    }));
    setCartItens(itensArray);
    const currPrice = Object.entries(getItens)
      .reduce((acc, curr) => acc + curr[1].totalProduct, 0).toFixed(2);
    setTotalPrice(currPrice);
  }, []);

  // const { id } = useParams();

  // useEffect(() => {
  //   setOrdersInfo(fetchOrderInfo(id));
  // }, [id]);

  const brazilianPrice = (value) => {
    const minN = 3;
    if (typeof value === 'number') value = value.toFixed(2);
    const newPrice = value.toString().replace('.', ',');
    if (newPrice.length === minN) return `${newPrice}0`;
    return newPrice;
  };
  return (
    <div>
      <NavBar />
      <div>
        <p>Detalhe do Pedido</p>
        <div>
          <p data-testid="customer_order_detailselement-order-details-label-order-id">
            Pedido 0003
          </p>
          <p data-testid="customer_order_detailselement-order-details-label-seller-name">
            P.Vend: Fulana
          </p>
          <p data-testid="customer_order_detailselement-order-details-label-order-date">
            07/04/2021
          </p>
          <p data-testid={ id40 }>
            Entregue
          </p>
          <p data-testid="customer_order_detailsbutton-delivery-check">
            Marcar como entregue
          </p>
        </div>
        <div>
          {cartItens.map((item, index) => (
            <DetailsItem
              cartItem={ item.item }
              order={ index }
              key={ index + item.item.name }
            />
          ))}
        </div>
        <button
          type="button"
        >
          {`Total $:${brazilianPrice(totalPrice)}`}
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
