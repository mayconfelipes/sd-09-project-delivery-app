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

  // const calculateTotalPrice = (array) => {
  //   let totalPrice = 0;
  //   array.forEach(({ quantity, price }) => {
  //     totalPrice += quantity * Number(price);
  //   });

  //   setTotal(totalPrice);
  // };

  // const convertCartToArray = () => {
  //   const productsList = Object.keys(cart).map((product) => cart[product]);
  //   calculateTotalPrice(productsList);
  //   return productsList;
  // };

  const calculateTotalPrice = (array) => {
    let totalPrice = 0;
    array.forEach(({ quantity, price }) => {
      totalPrice += quantity * Number(price);
    });

    setTotal(totalPrice);
  };

  // https://reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies
  useEffect(() => {
    const convertCartToArray = () => {
      const productsList = Object.keys(cart).map((product) => cart[product]);
      return productsList;
    };

    const converted = convertCartToArray();

    const listTotal = converted
      .reduce((acc, curr) => acc + (curr.quantity * Number(curr.price)), 0);
    setTotal(listTotal);
    setProducts(converted);
  }, [cart, setProducts, setTotal]);

  const handleRemoveProduct = (indexItem) => {
    const tmpProducts = products;

    const updatedProducts = tmpProducts.filter((_product, index) => index !== indexItem);
    setProducts(updatedProducts);
    calculateTotalPrice(updatedProducts);
  };

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
        { `Total: R$ ${(total.toFixed(2)).replace(/\./, ',')}` }
      </span>
    </div>
  );
};

export default OrderLIst;
