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
      const result = await fetchGET('http://localhost:3001/product');
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
          <button type="button">PRODUTOS</button>
          <button type="button">MEUS PEDIDOS</button>
          <p>NOME DO USER</p>
          <button type="button">Sair</button>
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
