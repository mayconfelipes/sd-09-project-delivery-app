import React, { useContext, useEffect } from 'react';
import Context from '../../context';
import formatPrice from '../../services/formatPrice';

const OrderTable = () => {
  const { cart, setCart } = useContext(Context);
  const { totalValue } = cart;
  const local = JSON.parse(localStorage.getItem('cart'));

  const removeProduct = ({ target }) => {
    const newCart = { ...cart };
    const indexToRemove = newCart
      .products.findIndex((prod) => prod.id === Number(target.name));
    const itemToRemove = newCart.products.find((prod) => prod.id === Number(target.name));
    newCart.totalValue = totalValue - (itemToRemove.price * itemToRemove.quantity);
    newCart.products.splice(indexToRemove, 1);

    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    setCart(localCart);
  }, []);

  const dataIdNumber = 'customer_checkout__element-order-table-item-number-';
  const dataIdName = 'customer_checkout__element-order-table-name-';
  const dataIdQuantity = 'customer_checkout__element-order-table-quantity-';
  const dataIdUnitPrice = 'customer_checkout__element-order-table-unit-price-';
  const dataIdSubTotal = 'customer_checkout__element-order-table-sub-total-';
  const dataIdRemove = 'customer_checkout__element-order-table-remove-';

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            local.products.map((item, index) => (
              <tr key={ item.id }>
                <td
                  data-testid={ dataIdNumber + index }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={ dataIdName + index }
                >
                  {item.name}
                </td>
                <td
                  data-testid={ dataIdQuantity + index }
                >
                  {item.quantity}
                </td>
                <td
                  data-testid={ dataIdUnitPrice + index }
                >
                  {formatPrice(item.price)}
                </td>
                <td
                  data-testid={ dataIdSubTotal + index }
                >
                  {formatPrice(item.price * item.quantity)}
                </td>
                <td>
                  <button
                    type="button"
                    name={ item.id }
                    onClick={ removeProduct }
                    data-testid={ dataIdRemove + index }
                  >
                    REMOVE
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {formatPrice(totalValue)}
      </span>
    </div>
  );
};

export default OrderTable;
