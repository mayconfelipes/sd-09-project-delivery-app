import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar() {
  const history = useHistory();

  // const { name } = JSON.parse(localStorage.getItem('user'));
  const name = 'Carine';

  return (
    <nav className="navbar-container">
      <span className="navbar-left">
        <button
          type="button"
          onClick={ () => history.push('/customer/products') }
        >
          Produtos
        </button>
        <button type="button">Meus Pedidos</button>
      </span>
      <span className="navbar-right">
        <span>{ name }</span>
        <button type="button">Sair</button>
      </span>
    </nav>
  );
}

export default NavBar;
