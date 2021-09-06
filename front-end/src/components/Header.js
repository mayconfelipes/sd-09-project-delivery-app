import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [firstNavBarText, setFirstNavBarText] = useState('');
  const [secondNavBarLink, setSecondNavBarLink] = useState(false);
  const History = useHistory();

  function handleLogout() {
    localStorage.clear();
    History.push('/login');
  }

  function renderSecondNavBarLink() {
    return (
      <Link
        className="noUnderline"
        to="/customer/orders"
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </Link>
    );
  }

  useEffect(() => {
    if (History.location.pathname === '/admin/manage') {
      setFirstNavBarText('GERENCIAR USUÁRIOS');
    }
    if (History.location.pathname === '/seller/orders') {
      setFirstNavBarText('PEDIDOS');
    }
    setFirstNavBarText('PRODUTOS');
    setSecondNavBarLink(true);
    console.log(History.location.pathname);
  }, [History]);

  return (
    <div className="navBar">
      <div className="leftHeader">
        <Link
          className="noUnderline"
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          { firstNavBarText }
        </Link>
        { secondNavBarLink && renderSecondNavBarLink() }
      </div>
      <div className="rightHeader">
        <p data-testid="customer_products__element-navbar-user-full-name">
          { user.name || null }
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </div>
    </div>
  );
};

export default Header;
