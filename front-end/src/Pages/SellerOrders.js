import React from 'react';
import CardStatus from '../Components/Organisms/CardStatus';
import NavBar from '../Components/Organisms/NabBar';

function SellerOrders() {
  const linksNavbar = [{
    text: 'pedido',
    url: 'https://localhost:3000',
  }];

  return (
    <>
      <NavBar
        links={ linksNavbar }
        user="Fulana Pereira"
      />
      <div className="all-cards">
        <CardStatus
          sellerId="0001"
          status="Status do Pedido"
          dateSeller="DD/MM/YYYY"
          price="R$ 00,00"
        >
          Address
        </CardStatus>
      </div>
    </>
  );
}

export default SellerOrders;
