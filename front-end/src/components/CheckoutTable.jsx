import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import LargeButton from './LargeButton';
import testIds from '../utils/dataTestIds';
import {
  setCarrinhoLocalStorage,
  getTotalCartLocalStorage,
} from '../utils/storage';

function ProductsTable({ cartData }) {
  const { setTotalCart } = useContext(AppContext);

  function handleRemove(i) {
    const RemoveCartData = {
      productId: i,
      quantity: 0,
    };
    setCarrinhoLocalStorage(RemoveCartData);
    setTotalCart(getTotalCartLocalStorage());
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item, index) => (
          <tr key={ index }>
            <td data-testid={ testIds[22] + index }>{index + 1}</td>
            <td data-testid={ testIds[23] + index }>{item.name}</td>
            <td data-testid={ testIds[24] + index }>{item.quantity}</td>
            <td data-testid={ testIds[25] + index }>
              {item.unitPrice.replace('.', ',')}
            </td>
            <td data-testid={ testIds[26] + index }>
              {item.subTotal.replace('.', ',')}
            </td>
            <td>
              <LargeButton
                buttonText="remover"
                onClick={ () => handleRemove(item.productId) }
                dataTestId={ testIds[27] + index }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductsTable.propTypes = {
  cartData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProductsTable;
