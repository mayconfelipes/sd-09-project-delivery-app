import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar() {
  const history = useHistory();

  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <nav>
      <span>
        <button
          type="button"
          onClick={ () => history.push('/customer/products') }
        >
          Produtos
        </button>
        <button type="button">Meus Pedidos</button>
      </span>
      <span>
        <button type="button">{ name }</button>
        <button type="button">Sair</button>
      </span>
    </nav>
  );
}

export default NavBar;
