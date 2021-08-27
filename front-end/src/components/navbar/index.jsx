import React from 'react';

const Navbar = (abas, user) => {
  console.log('lint eu te amo');
  return (
    <nav>
      {abas.map((aba) => {
        console.log('lint');
        return <a key={ aba } href="##">{ aba }</a>;
      })}
      <span>{ user }</span>
      <button type="button">Sair</button>
    </nav>
  );
};

export default Navbar;
