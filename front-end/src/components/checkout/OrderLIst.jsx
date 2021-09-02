import React, { useEffect } from 'react';
import { useDeliveryContext } from '../../context/deliveryProvider';
import TableRow from './TableRow';

const OrderLIst = () => {
  const tableHeaders = [
    'Item',
    'Descrição',
    'Quantidade',
    'Valor Unitario',
    'Sub-total',
    'Remover item',
  ];

  const { cart, products, setProducts, total, setTotal } = useDeliveryContext();

  const calculateTotalPrice = (array) => {
    let totalPrice = 0;
    array.forEach(({ quantity, price }) => {
      totalPrice += quantity * Number(price);
    });

    setTotal(totalPrice);
  };

  const convertCartToArray = () => {
    const productsList = Object.keys(cart).map((product) => cart[product]);
    console.log(productsList);
    calculateTotalPrice(productsList);
    return productsList;
  };

  useEffect(() => {
    setProducts(convertCartToArray());
  }, []);

  const handleRemoveProduct = (indexItem) => {
    const tmpProducts = products;

    const updatedProducts = tmpProducts.filter((_product, index) => index !== indexItem);
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };

  console.log('TOTAL > ', total);

  return (
    <div className="order-list-container">
      <table className="order-table">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => <th key={ index }>{ header }</th>)}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <TableRow
              key={ index }
              item={ index }
              product={ product }
              onclick={ handleRemoveProduct }
            />
          ))}
        </tbody>
      </table>
      <span
        className="order-price"
        data-testid="customer_checkout__element-order-total-price"
      >
        { `R$ ${(total.toFixed(2)).replace(/\./, ',')}` }
      </span>
    </div>
  );
};

export default OrderLIst;
