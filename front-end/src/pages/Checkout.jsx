import React, { useState, useEffect } from 'react';
import api from '../services/api';
// import Provider from '../context/Provider';

function Checkout() {
  // const { cart, setCart } = useContext(Provider);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get('product')
      .then((res) => setProducts(res.data));
    setLoading(false);
  }, []);

  console.log(loading);
  console.log(products);

  const productsTbobyRender = () => {
    if (loading) return <h3>Carregando...</h3>;

    return products.map((product, index) => (
      <tr key={ `${product.id}` }>
        <td data-testid={ `customer_checkout__element-order-table-item-number-${index}` }>
          {index + 1}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
          {product.name}
        </td>
        <td data-testid={ `customer_checkout__element-order-table-quantity-${index}` }>
          Quantidade carrinho
        </td>
        <td data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }>
          {product.price}
        </td>
        <td data-testid={ `checkout__element-order-table-sub-total-${index}` }>
          Sub total carrinho
        </td>
        <td>
          <button
            type="button"
            data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            onClick={ setProducts(products.filter((prod) => id !== prod.id)) }
          >
            Remover
          </button>
        </td>
      </tr>
    ));
  };

  const cartTableRender = () => (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
          <th>Remover item</th>
        </tr>
      </thead>
      <tbody>{ productsTbobyRender() }</tbody>
    </table>
  );

  /* const detailsAndAdressRender = () => (
    <table>
      <thead>
        <tr>
          <th>P.Vendedora Responsável</th>
          <th>Endereço</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  ); */

  return (
    <div>
      <h2>Finalizar pedido</h2>
      {cartTableRender()}
      <h1 className="tp" data-testid="customer_checkout__element-order-total-price">
        {`Total: R$ ${products.length === 0 ? 0.00 : products[0].price}`}
      </h1>
      <hr />
      <h3>Detalhes do pedido para entrega</h3>
    </div>
  );
}

export default Checkout;
