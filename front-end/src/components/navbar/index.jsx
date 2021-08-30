import React from 'react';

const Navbar = (abas, user) => {
  const { tabs } = abas;

  return (
    <nav>
      {tabs.map((aba) => <a key={ aba } href="##">{ aba }</a>)}
      <span>{ user }</span>
      <button type="button">Sair</button>
    </nav>
  );
};

export default Navbar;
