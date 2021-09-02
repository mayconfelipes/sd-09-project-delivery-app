import React from 'react';
import OrderCard from '../components/OrderCard';
import fetchGET from '../services/fetchGET';

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
    const { allSales } = this.state;
    const { role } = JSON.parse(localStorage.user);

    return (
      <div>
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
