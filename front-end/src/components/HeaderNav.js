import React from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      linkTo: '',
      nameBtn: '',
    };

    this.userName = this.userName.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount() {
    this.userName();
  }

  userName() {
    const { name, role } = JSON.parse(localStorage.user);

    if (role === 'seller') {
      this.setState({
        name,
        linkTo: '/seller/orders',
        nameBtn: 'PEDIDOS',
      });
    } else if (role === 'administrator') {
      this.setState({
        name,
        linkTo: '/admin/manage',
        nameBtn: 'GERENCIAR USUÁRIOS',
      });
    }
  }

  removeUser() {
    localStorage.removeItem('user');
  }

  render() {
    const { name, linkTo, nameBtn } = this.state;

    return (
      <div>
        <nav>
          <div className="left-nav">
            <Link to={ `${linkTo}` }>
              <button
                type="button"
                data-testid="customer_products__element-navbar-link-orders"
              >
                { nameBtn }
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

export default HeaderNav;
