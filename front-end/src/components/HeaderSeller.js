import React from 'react';
import { Link } from 'react-router-dom';

class HeaderSeller extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };

    this.userName = this.userName.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount() {
    this.userName();
  }

  userName() {
    const user = localStorage.getItem('user');
    this.setState({
      name: JSON.parse(user).name,
    });
  }

  removeUser() {
    localStorage.removeItem('user');
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <nav>
          <Link to="/seller/orders">
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-orders"
            >
              PEDIDOS
            </button>
          </Link>
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
      </div>
    );
  }
}

export default HeaderSeller;
