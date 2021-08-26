import React from 'react';
import NavBarCustomer from '../components/navBarCustomer';

function CustomerProducts() {
  return (
    <div>
      <NavBarCustomer />

      {/* product_card será populado dentro de um map, talvez :) */}
      <div className="product_card">
        <div
          className="card_price"
          data-testid="customer_products__element-card-price-"
        >
          R$ 4,49
        </div>

        <img src="/" alt="" data-testid="customer_products__img-card-bg-image-" />

        <div className="product_card__footer">
          <p
            className="product_name"
            data-testid="customer_products__element-card-title-"
          >
            Becks
          </p>

          <div className="quantity">
            <button
              className="decremento"
              type="button"
              data-testid="customer_products__button-card-rm-item-"
            >
              -
            </button>
            <span data-testid="customer_products__input-card-quantity-">0</span>
            <button
              className="incremento"
              type="button"
              data-testid="customer_products__button-card-add-item-"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div
        className="ver_carrinho"
        data-testid="customer_products__checkout-bottom-value"
      >
        <span>Ver carrinho: R$ 1.000,00</span>
      </div>
    </div>
  );
}

export default CustomerProducts;
