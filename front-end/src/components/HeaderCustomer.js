import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.css';

class HeaderCustomer extends React.Component {
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
          <div className="left-nav">
            <Link to="/customer/products">
              <button
                type="button"
                data-testid="customer_products__element-navbar-link-products"
              >
                PRODUTOS
              </button>
            </Link>
            <Link to="/customer/orders">
              <button
                type="button"
                data-testid="customer_products__element-navbar-link-orders"
              >
                MEUS PEDIDOS
              </button>
            </Link>
          </div>
          <div className="right-nav">
            <p
              className="name-nav"
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
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderCustomer;
