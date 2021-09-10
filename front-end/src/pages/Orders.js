import React from 'react';
import OrderCard from '../components/OrderCard';
import fetchGET from '../services/fetchGET';
import '../styles/Orders.css';

class Orders extends React.Component {
  constructor() {
    super();

    this.state = {
      allSales: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const result = await fetchGET('sales-products');

    this.setState({
      allSales: result,
    });
  }

  render() {
    const { role } = JSON.parse(localStorage.user);
    const { allSales } = this.state;

    return (
      <div className="allCards">
        { allSales.map((sale, index) => (
          <OrderCard
            key={ `${sale}${index}` }
            sale={ sale }
            role={ role }
          />
        )) }
      </div>
    );
  }
}

export default Orders;
