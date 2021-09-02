import React from 'react';

import OrderTable from '../Components/newComponents/OrderTable';
import OrderForms from '../Components/newComponents/OrderForms';

import '../styles/Checkout.css';
import NavBar from '../Components/newComponents/NabBar';

export default function Checkout() {
  return (
    <section>
      <NavBar />
      {/* Componente Tabela de pedidos */}
      <section>
        <h3>Finalizar pedido</h3>
        <OrderTable />
      </section>

      {/* Componente formulario de entrega */}
      <section>
        <h3>Detalhes e Endereço para Entrega</h3>
        <OrderForms />
      </section>
    </section>
  );
}
