import React, { useContext } from 'react';

import NavBar from '../Components/newComponents/NavBar';
import OrderTable from '../Components/newComponents/OrderTable';
import OrderForms from '../Components/newComponents/OrderForms';
import { CartContext } from '../Contexts/CartContext';

import '../styles/Checkout.css';

export default function Checkout() {
  const { cartItems, setCartItems, totalPrice } = useContext(CartContext);

  return (
    <section>
      <NavBar />

      {/* Componente Tabela de pedidos */}
      <section>
        <h3>Finalizar pedido</h3>
        <OrderTable
          cartItems={ cartItems }
          setCartItems={ setCartItems }
          totalPrice={ totalPrice }
        />
      </section>

      {/* Componente formulario de entrega */}
      <section>
        <h3>Detalhes e Endereço para Entrega</h3>
        <OrderForms />
      </section>
    </section>
  );
}
