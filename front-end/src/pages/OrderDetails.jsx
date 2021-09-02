import React from 'react';
import { useParams } from 'react-router-dom';
import OrderProducts from '../components/OrderProducts';

function OrderDetails() {
  const { id } = useParams();
  // const [order, setOrder] = useState({});

  const orders = {
    userId: 4,
    sellerId: 3,
    totalPrice: 17.20,
    deliveryAddress: 'tetse',
    deliveryNumber: 123,
    saleDate: '01-09-2021',
    productCart: [
      { name: 'Skol Lata 250ml', quantity: 1, price: 1.50 },
      { name: 'Heineken 600ml', quantity: 2, price: 4.50 }],
  };
  // const getOrder = useCallback(async () => {
  //   const getOrderByPk = async () => {
  //     try {
  //       const response = await api.get(`/sales/${id}`);
  //       setOrder(response.data);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   };
  //   getOrderByPk();
  // }, [id]);

  // useEffect(() => {
  //   getOrder();
  // }, [getOrder]); // estamos com problema de performance aqui também

  return (
    <section>
      <h1>Detalhes do pedido</h1>
      <span>{id}</span>
      { orders.productCart.map(({ name, quantity, price }, index) => (
        <OrderProducts
          key={ name }
          data={ { name, index, quantity, price } }
        />
      )) }
    </section>
  );
}

export default OrderDetails;
