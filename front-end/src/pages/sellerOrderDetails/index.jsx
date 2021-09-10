// import React, { useState, useEffect } from 'react';
// import Navbar from '../../components/navbar';

// // const dataTestIdLable = 'seller_order_details__element-order-details-label';
// // const dataTestIdTable = 'seller_order_details__element-order-table';
// // const dataTestIdTotal = 'seller_order_details__element-order';

// const SellerOrderDetails = () => {
//   const [order, setOrder] = useState({});
// const [loading, setLoading] = useState(true);
//   const { sale, products } = order;
//   const {
//     id: saleId, sale_date: saleDate, status, total_price: totalPrice,
//   } = sale;
//   const { name } = JSON.parse(localStorage.getItem('user'));
//   const paginas = [
//     'PEDIDOS *customer_products__element-navbar-link-orders*/orders/products',
//   ];
//   const getOrder = async () => {
//     const { token } = JSON.parse(localStorage.getItem('user'));
//     const pathName = window.location.pathname;
//     const id = pathName.split('/');
//     const orderDetail = await getOrderById(token, id[3]);
//     setOrder(orderDetail);
// setLoading(false);
//   };
//   useEffect(() => {
//     getOrder();
//     console.log(order);
//   }, []);
//   const headersTable = ['Item', 'Descrição', 'Quantidade', 'Valor Unitario', 'Sub-total'];
//   console.log(products, totalPrice);
//   return (
//     <div>
//       <Navbar abas={ paginas } user={ name } />
//       <h1>Bora</h1>
//       <div>
//         <div>
//           <p>{ saleId }</p>
//           <p>{ saleDate }</p>
//           <p>{ status }</p>
//           <button
//             type="button"
//           >
//             Preparar Pedido
//           </button>
//           <button
//             type="button"
//           >
//             Saiu para entrega
//           </button>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               { headersTable.map((element) => (
//                 <th key={ element }>{element}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {
//               products.map(({ res: { name: productName, price }, quantity }, index) => (
//                 <tr key={ item.id }>
//                   <td
//                     data-testid
//                   >
//                     {index + 1}
//                   </td>
//                   <td
//                     data-testid
//                   >
//                     {productName}
//                   </td>
//                   <td
//                     data-testid
//                   >
//                     {quantity}
//                   </td>
//                   <td
//                     data-testid
//                   >
//                     {formatPrice(price)}
//                   </td>
//                   <td
//                     data-testid
//                   >
//                     {formatPrice(price * quantity)}
//                   </td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SellerOrderDetails;
