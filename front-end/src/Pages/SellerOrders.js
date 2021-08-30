import React from 'react';
import CardStatus from '../Components/Organisms/CardStatus';
import NavBar from '../Components/Organisms/NabBar';

function SellerOrders() {
  const linksNavbar = [{
    text: 'pedido',
    url: 'https://localhost:3000',
  }];
  const id = 1;

  return (
    <>
      <NavBar
        links={ linksNavbar }
        user="Fulana Pereira"
      />
      <div className="all-cards">
        <CardStatus
          sellerId={ {
            id,
            testId: `seller_orders__element-order-id-${id}`,
          } }
          status={ {
            text: 'Status do Pedido',
            testId: `seller_orders__element-delivery-status-${id}`,
          } }
          dateSeller={ {
            text: 'DD/MM/YYYY',
            testId: `seller_orders__element-order-date-${id}`,
          } }
          price={ {
            text: 'R$ 00,00',
            testId: `seller_orders__element-card-price-${id}`,
          } }
        >
          {{
            text: 'Address',
            testId: `seller_orders__element-card-address-${id}`,
          }}
        </CardStatus>
      </div>
    </>
  );
}

export default SellerOrders;
