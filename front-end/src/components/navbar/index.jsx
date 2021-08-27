import React from 'react';

const Navbar = (abas, user) => {
  console.log('lint eu te amo');
  return (
    <nav>
      {abas.map(({ aba }, index) => {
        console.log('lint');
        return <a key={ index } href="##">{ aba }</a>;
      })}
      <span>{ user }</span>
      <button type="button">Sair</button>
    </nav>
  );
};

export default Navbar;
