import React from "react";

const renderProducts = (products, user) =>
  products.map((product, index) => (
    <section key={product.id}>
      <p
        className="item-number"
        data-testid={`${user}_order_details__element-order-table-item-number-${index}`}
      >
        {product.id}
      </p>
      <p
        className="item-name"
        data-testid={`${user}_order_details__element-order-table-name-${index}`}
      >
          Name
        {product.name}
      </p>
      <div
        className="quantity"
        data-testid={`${user}_order_details__element-order-table-quantity-${index}`}
      >
        Email
        {product.salesProducts.quantity}
      </div>
      <div
        className="unit-price"
        data-testid={`${user}_order_details__element-order-table-unit-price-${index}`}
      >
        Tipo
        {product.price}
      </div>
      <div
        className="total-price"
        data-testid={`${user}_order_details__element-order-table-sub-total-${index}`}
      >
        Excluir
        {product.salesProducts.quantity * product.price}
      </div>
    </section>
  ));

export default renderProducts;
