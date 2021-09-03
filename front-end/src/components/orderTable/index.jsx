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

  const dataIdNumber = 'customer_checkout__element-order-table-item-number-';
  const dataIdName = 'customer_checkout__element-order-table-name-';
  const dataIdQuantity = 'cusctomer_checkout__element-order-table-quantity-';
  const dataIdUnitPrice = 'customer_checkout__element-order-table-unit-price-';
  const dataIdSubTotal = 'customer_checkout__element-order-table-sub-total-';
  const dataIdRemove = 'customer_checkout__element-order-table-remove-';

  return (
    <table>
      <thead>
        { headers.map((item) => (<th key={ item }>{ item }</th>)) }
      </thead>
      <tbody>
        {
          products.map((item) => (
            <tr key={ item.id }>
              <td
                data-testid={ dataIdNumber + id }
              >
                {item.id}
              </td>
              <td
                data-testid={ dataIdName + id }
              >
                {item.name}
              </td>
              <td
                data-testid={ dataIdQuantity + id }
              >
                {item.quantity}
              </td>
              <td
                data-testid={ dataIdUnitPrice + id }
              >
                {formatPrice(item.price)}
              </td>
              <td
                data-testid={ dataIdSubTotal + id }
              >
                {formatPrice(item.price * item.quantity)}
              </td>
              <td>
                <button
                  type="button"
                  name={ item.id }
                  onClick={ removeProduct }
                  data-testid={ dataIdRemove + id }
                >
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
