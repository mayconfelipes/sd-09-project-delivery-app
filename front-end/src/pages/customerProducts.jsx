import React, { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import NavBarCustomer from '../components/navBarCustomer';
import '../styles/customerProducts.css';

const CustomerProducts = () => {
  const {
    getProducts,
    setProducts,
    products,
  } = useContext(ProductsContext);

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  const increment = () => {
    const incre = document.querySelector('.incremeto');

    incre.addEventListener('click', () => {
      const text = incre.previousSibling.value;
      console.log(text);
    });
  };

  return (
    <div>
      <NavBarCustomer textProp="produtos" />

      <div className="container_cards">
        {
          products.map((product, index) => (
            <div className="product_card" key={ index }>
              <div
                className="card_price"
                data-testid={ `customer_products__element-card-price-${product.id}` }
              >
                { `R$ ${product.price}` }
              </div>

              <img
                src={ product.urlImage }
                alt={ `Imagem de ${product.name}` }
                data-testid={ `customer_products__img-card-bg-image-${product.id}` }
                className="image"
              />

              <div className="product_card__footer">
                <p
                  className="product_name"
                  data-testid={ `customer_products__element-card-title-${product.id}` }
                >
                  { product.name }
                </p>

                <div className="quantity">
                  <button
                    className="decremento"
                    type="button"
                    data-testid={ `customer_products__button-card-rm-item-${product.id}` }
                  >
                    -
                  </button>
                  <input
                    data-testid={
                      `customer_products__input-card-quantity-${product.id}`
                    }
                  />
                  <button
                    className="incremento"
                    type="button"
                    data-testid={
                      `customer_products__button-card-add-item-${product.id}`
                    }
                    onClick={ () => increment() }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div
        className="ver_carrinho"
        data-testid="customer_products__checkout-bottom-value"
      >
        <span>Ver carrinho: R$ 1.000,00</span>
      </div>
    </div>
  );
};

export default CustomerProducts;
