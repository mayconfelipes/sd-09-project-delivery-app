import React from 'react';
import NavBarCustomer from '../components/navBarCustomer';

function CustomerProducts() {
  const DBMock = [
    {
      price: '1,00',
      img: '/',
      description: 'produto_1',
    },
    {
      price: '2,00',
      img: '/',
      description: 'produto_2',
    },
    {
      price: '3,00',
      img: '/',
      description: 'produto_3',
    },
  ];

  return (
    <div>
      <NavBarCustomer textProp="produtos" />

      {
        DBMock.map((product, index) => (
          <div className="product_card" key={ index }>
            <div
              className="card_price"
              data-testid="customer_products__element-card-price-"
            >
              { product.price }
            </div>

            <img
              src={ product.img }
              alt={ `Imagem de ${product.description}` }
              data-testid="customer_products__img-card-bg-image-"
              style={ { width: '80px' } }
            />

            <div className="product_card__footer">
              <p
                className="product_name"
                data-testid="customer_products__element-card-title-"
              >
                { product.description }
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
        ))
      }

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
