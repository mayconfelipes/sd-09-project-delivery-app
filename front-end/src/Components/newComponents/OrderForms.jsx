import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getSellers, closeOrder } from '../../services/api';
import { CartContext } from '../../Contexts/CartContext';

export default function OrderForms() {
  const history = useHistory();
  const { totalPrice, cartItems } = useContext(CartContext);

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
  // const [vraw, setVraw] = useState('');
  const [userInfo, setUserInfo] = useState({
    seller: sellers[0].id, address: '', number: '',
  });

  const handleChange = ({ target: { id, value } }) => setUserInfo({
    ...userInfo, [id]: value,
  });

  useEffect(() => {
    const fetchSellers = async () => {
      setSellers(await getSellers());
      // console.log(sellers);
    };

    fetchSellers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderInfo = {
      userId: JSON.parse(localStorage.getItem('user'))
        ? JSON.parse(localStorage.getItem('user')).userId
        : 0,
      sellerId: sellers[0].id,
      totalPrice,
      deliveryAddress: userInfo.address,
      deliveryNumber: userInfo.number,
      products: cartItems.map(({ id, quantity }) => ({ id, quantity })),
    };

    const response = await closeOrder(orderInfo); // retorna { saleId }

    console.log({ orderInfo, response }, sellers[0].id);

    return !response.message && history.push(`/customer/orders/${response.saleId}`);

    // setVraw(response.saleId);
    // console.log(vraw);
  };

  return (
    <section className="order-details-address">
      <form onSubmit={ handleSubmit } action="/customer/orders/id" method="POST">
        <div>
          <label htmlFor="seller">
            P. Vendedora Responsável
            <select
              onChange={ handleChange }
              id="seller"
              data-testid="customer_checkout__select-seller"
            >
              {sellers.map(({ name, id }) => (
                <option value={ id } key={ id }>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="address">
            Endereço
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              id="address"
              placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
              onChange={ handleChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="number">
            Número
            <input
              data-testid="customer_checkout__input-addressNumber"
              type="number"
              id="number"
              placeholder="198"
              onChange={ handleChange }
            />
          </label>
        </div>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </section>
  );
}

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
