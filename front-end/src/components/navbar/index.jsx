import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as S from './styled';

const Navbar = ({ abas, user }) => {
  const [redirect, setRediret] = useState(false);

  const logOut = () => {
    localStorage.clear();
    setRediret(true);
  };
  // console.log('abas', abas);
  // console.log('user', user);
  return (
    <nav>
      {abas.map((aba) => (
        <S.LinkNav
          data-testid={ aba.split('*')[1] }
          key={ aba }
          to={ aba.split('*')[2] }
        >
          { aba.split('*')[0] }
        </S.LinkNav>))}
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { user }
      </span>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logOut }
      >
        Sair
      </button>
      { redirect && <Redirect to="/" /> }
    </nav>
  );
};

Navbar.propTypes = {
  abas: PropTypes.node.isRequired,
  user: PropTypes.string.isRequired,
};

export default Navbar;
