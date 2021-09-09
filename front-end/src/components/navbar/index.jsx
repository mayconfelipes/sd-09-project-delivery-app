import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';
import * as S from './styled';

const Navbar = ({ abas, user }) => {
  const [redirect, setRediret] = useState(false);

  const logOut = () => {
    localStorage.clear();
    setRediret(true);
  };
  // console.log('abas', abas);
  // console.log('user', user);
  const history = useHistory();
  return (
    <nav>
      {abas.map((aba) => (
        <S.ButtonRedirect
          key={ aba }
          data-testid={ aba.split('*')[1] }
          type="button"
          onClick={ () => {
            history.push(aba.split('*')[2]);
          } }
        >
          { aba.split('*')[0] }
        </S.ButtonRedirect>
      ))}
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
