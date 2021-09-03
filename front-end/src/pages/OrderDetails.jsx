// import React from 'react';
// import { useParams } from 'react-router-dom';
// // import React, { useContext } from 'react';
// // import ProductsContext from '../context/ProductsContext';

// function OrderDetails() {
//   const { allOrders } = useContext(ProductsContext);
//   const { id } = useParams();
//   const { id: orderId, seller, totalPrice, status, saleDate, products } = allOrders[id];
//   return (
//     <div>
//       Detalhes do pedido
//       <div className="order-details-header">
//         <h3>{ `PEDIDO: ${orderId}` }</h3>
//         <span>{ `P.Vend.: ${seller.name}` }</span>
//         <span>{ saleDate }</span>
//         <span>{ status }</span>
//         <button
//           type="button"
//         >
//           Marcar como entregue
//         </button>
//       </div>
//       <table>
//         <tr>
//           <th>Item</th>
//           <th>Descrição</th>
//           <th>Quantidade</th>
//           <th>Valor Unitário</th>
//           <th>Subtotal</th>
//         </tr>
//         <tbody>
//           { products.map((product) => {

//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default OrderDetails;
