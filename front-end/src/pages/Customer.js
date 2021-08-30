import React from 'react';
import ProductCard from '../components/ProductCard';
import fetchGET from '../services/fetchGET';

class Customer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    try {
      const result = await fetchGET('http://localhost:3001/products');
      this.setState({
        products: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <nav>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </button>
          <p
            data-testid="customer_products__element-navbar-user-full-name"
          >
            NOME DO USER
          </p>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </nav>
        <div>
          { products.map((product, index) => (
            <ProductCard
              key={ `${product}${index}` }
              product={ product }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Customer;
