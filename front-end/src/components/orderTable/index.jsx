import React, { useContext } from 'react';
import Context from '../../context';
import formatPrice from '../../services/formatPrice';

const headers = [
  'Item', 'Descrição', 'Quantidade',
  'Valor Unitário', 'Sub-total', 'Remover Item',
];

const OrderTable = () => {
  const { cart, setCart } = useContext(Context);
  const { products, totalValue } = cart;

  const removeProduct = ({ target }) => {
    const newCart = cart;
    const indexToRemove = newCart
      .products.findIndex((prod) => prod.id === Number(target.name));
    const itemToRemove = newCart.products.find((prod) => prod.id === Number(target.name));
    newCart.totalValue = totalValue - (itemToRemove.price * itemToRemove.quantity);
    newCart.products.splice(indexToRemove, 1);
    setCart(newCart);
  };

  return (
    <table>
      <thead>
        { headers.map((item) => (<th key={ item }>{ item }</th>)) }
      </thead>
      <tbody>
        {
          products.map((item) => (
            <tr key={ item.id }>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price)}</td>
              <td>{formatPrice(item.price * item.quantity)}</td>
              <td>
                <button type="button" name={ item.id } onClick={ removeProduct }>
                  REMOVE
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default OrderTable;
