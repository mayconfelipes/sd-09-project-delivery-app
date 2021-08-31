/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from '../Components/newComponents/NavBar';
import { CartContext } from '../Contexts/CartContext';
import { getSellers, closeOrder } from '../services/api';

import '../styles/Checkout.css';

export default function Checkout() {
  const { cartItems, setCartItems, totalPrice } = useContext(CartContext);
  const history = useHistory();

  const sellersSimulator = [
    {
      id: 1,
      name: 'Osvaldo',
    },
    {
      id: 2,
      name: 'Tia da creche',
    },
    {
      id: 3,
      name: 'Papai Noel',
    },
  ];

  const [sellers, setSellers] = useState(sellersSimulator);
  const [userInfo, setUserInfo] = useState({
    seller: sellers[0].id, address: '', number: '',
  });

  const handleChange = ({ target: { id, value } }) => setUserInfo({
    ...userInfo, [id]: value,
  });

  // fazer um useEffect pra buscar o sellerId toda vez que o input select mudar
  useEffect(() => {
    const fetchSellers = async () => {
      setSellers(await getSellers());
    };

    fetchSellers();
  }, []);

  /**
   * orderInfo = {
      "userId": 3,
      "sellerId": 2,
      "totalPrice": 11,
      "deliveryAddress": "rua dois",
      "deliveryNumber": "casa 5",
      "products": [
        {
          "id": 1,
          "quantity": 1
        },
        {
          "id": 5,
          "quantity": 7
        }
      ]
    }
   */

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderInfo = {
      userId: 1,
      sellerId: userInfo.seller,
      totalPrice,
      deliveryAddress: userInfo.address,
      deliveryNumber: userInfo.number,
      products: cartItems.map(({ id, quantity }) => ({ id, quantity })),
    };

    const response = await closeOrder(orderInfo); // retorna { saleId }

    return !response.message && history.push(`/customer/orders/${response.saleId || 0}`);
  };

  return (
    <section>
      <NavBar />

      {/* Componente Resumo de Compras */}
      <section>
        <h3>Finalizar pedido</h3>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map(({ id, name, quantity, price }) => (
                <tr key={ id }>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td>{quantity * price}</td>
                  <td>
                    <button
                      onClick={ () => setCartItems(cartItems
                        .filter((item) => item.id !== id)) }
                      type="button"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <div>
          {/**
           * Na verdade, aqui será colocao o totalPrice
           * a lógica de soma será feita em outro lugar
          */}
          Total:
          {
            ` R$ ${cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}`
          }
        </div>
      </section>

      {/* Componente Detalhes de endereço e entrega */}
      <section>
        <h3>Detalhes e Endereço para Entrega</h3>
        <section className="order-details-address">
          <form onSubmit={ handleSubmit } action="/customer/orders/id" method="POST">
            <div>
              <label htmlFor="pessoa vendedora">P. Vendedora Responsável</label>
              <select onChange={ handleChange } id="seller">
                {sellers.map(({ name, id }) => (
                  <option value={ id } key={ id }>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
                onChange={ handleChange }
              />
            </div>

            <div>
              <label htmlFor="number">Número</label>
              <input
                type="number"
                id="number"
                placeholder="198"
                onChange={ handleChange }
              />
            </div>
            <button type="submit">FINALIZAR PEDIDO</button>
          </form>
        </section>
      </section>
    </section>
  );
}
