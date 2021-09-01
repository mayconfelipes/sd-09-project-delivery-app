import React, { useState, useEffect } from 'react';
// import LoginForm from '../Components/Organisms/LoginForm';
// import Logo from '../Components/Organisms/Logo';
import { getCostumerOrders } from '../services/api';
import NavBar from '../Components/newComponents/NabBar';
import CardCustumerOrder from '../Components/newComponents/CardCustumerOrder';

// async function salesList() {
//   const sales = JSON.parse(localStorage.getItem('user'));
//   const list = await getCostumerOrders(sales.token);
//   return list;
// }
function CustumeOrders() {
  const [listOrders, setListOrders] = useState([]);
  // let seletctOrders = []

  useEffect(() => {
    const fetchOrders = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const productsList = await getCostumerOrders(token);
      setListOrders(productsList);
    };
    fetchOrders();
  }, []);

  function mountList() {
    const { email } = JSON.parse(localStorage.getItem('user'));

    const seletctOrders = listOrders.filter(
      (order) => order.user.email === email,
    );

    return (
      <div>
        {
          seletctOrders.map(
            (order) => <CardCustumerOrder selectOrder={ order } key={ order.id } />,
          )
        }
      </div>
    );
    // console.log(seletctOrders[0]);
    // console.log(seletctOrders[0].id);
    // console.log(seletctOrders[0].status);
    // console.log(seletctOrders[0].saleDate);
    // console.log(seletctOrders[0].totalPrice);
    // return (
    //   <div>
    //     {
    //       seletctOrders.map((order) => (<CardCustumerOrder
    //         selectOrder={ order.id, order.status, order.id, order.status}
    //         key={ order.id }
    //       />
    //       ))
    //     }
    //   </div>
    //   ),
  }

  // console.log('teste do filter', listOrders.filter(
  //   (order) => order.user.email === user.email,
  // ));
  return (
    <>
      <NavBar />
      { mountList() }
      {/* {products.length > 0 && products
        .map((prod) => <ProductCard product={ prod } key={ prod.id } />)}
      <CartButton /> */}
    </>
  );
}

export default CustumeOrders;
