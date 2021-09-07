import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBarCustomer.css';

function NavBarSeller() {
  const getUserName = () => {
    const userName = JSON.parse(localStorage.getItem('user')) || '';
    if (userName) {
      return userName.name;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
  };

  function setOrders() {
    return (
      <div className="navbar_pedidos">
        <Link
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          PEDIDOS
        </Link>
      </div>
    );
  }

  function setNavbar() {
    return (
      <nav className="navbar">
        <div className="left_side">
          { setOrders() }
        </div>

        <div className="right_side">
          <div
            className="navbar_nome"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { getUserName() }
          </div>

          <div className="navbar_sair">
            <Link
              to="/login"
              data-testid="customer_products__element-navbar-link-logout"
              onClick={ () => logout() }
            >
              Sair
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      { setNavbar() }
    </>
  );
}

export default NavBarSeller;
