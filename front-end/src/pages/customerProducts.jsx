import React, { useState, useEffect } from 'react';
import NavBarCustomer from '../components/navBarCustomer';

function CustomerProducts() {
  // const DBMock = [
  //   {
  //     id: 1,
  //     price: '1,00',
  //     img: '/',
  //     description: 'produto_1',
  //   },
  //   {
  //     id: 2,
  //     price: '2,00',
  //     img: '/',
  //     description: 'produto_2',
  //   },
  //   {
  //     id: 3,
  //     price: '3,00',
  //     img: '/',
  //     description: 'produto_3',
  //   },
  // ];

  const [items, setItems] = useState([]);

  const getItems = async () => {
    const getFromDB = await fetch('http://localhost:3001/products');
    const respDB = await getFromDB.json();
    setItems(respDB);
    return respDB;
  };

  useEffect(() => {
    getItems();
    console.log(items);
  }, []);

  return (
    <div>
      <NavBarCustomer textProp="produtos" />

      <div className="container_cards">
        {
          items.map((product, index) => (
            <div className="product_card" key={ index }>
              <div
                className="card_price"
                data-testid="customer_products__element-card-price-"
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
