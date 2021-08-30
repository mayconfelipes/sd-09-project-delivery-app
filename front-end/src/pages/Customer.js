import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import fetchGET from '../services/fetchGET';

class Customer extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      name: '',
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.userName = this.userName.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
    this.userName();
  }

  userName() {
    const user = localStorage.getItem('user');
    this.setState({
      name: JSON.parse(user).name,
    });
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

  removeUser() {
    localStorage.removeItem('user');
  }

  render() {
    const { products, name } = this.state;
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
            { name }
          </p>
          <Link to="/login">
            <button
              type="button"
              onClick={ this.removeUser }
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </button>
          </Link>
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
