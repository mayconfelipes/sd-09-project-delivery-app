import React from 'react';

const Navbar = (abas, user) => {
  return (
    <nav>
      {abas.map((aba) => {
        return <a>{ aba }</a>
      })}
      <span>{ user }</span>
      <button type="button" >Sair</button>
    </nav>
  );
};

export default Navbar;