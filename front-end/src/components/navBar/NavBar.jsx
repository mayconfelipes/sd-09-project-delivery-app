import React from 'react';
import useStyle from './navBar.style';

export default function NavBar() {
  const classes = useStyle();

  return (
    <div className={ classes.root }>
      <div
        className={ classes.containersOptionsNavBarContainer }
      >
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          className={ classes.optionsNavBar }
          style={ { backgroundColor: '#2FC18C', color: '#000' } }
        >
          PRODUTOS
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          className={ classes.optionsNavBar }
          style={ { backgroundColor: '#036B52' } }
        >
          MEUS PEDIDOS
        </button>
      </div>
      <div
        className={ classes.containersOptionsNavBarContainer }
      >
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          className={ classes.optionsNavBar }
          style={ { backgroundColor: '#421981', fontWeight: '400' } }
        >
          NOME DO USUÁRIO
        </button>
        <button
          type="button"
          data-testid=" customer_products__element-navbar-link-logout"
          className={ classes.optionsNavBar }
          style={ { backgroundColor: '#056CF9', width: '20%', fontWeight: '400' } }
        >
          Sair
        </button>
      </div>
    </div>
  );
}
