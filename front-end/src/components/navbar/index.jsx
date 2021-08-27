import React from 'react';

const Navbar = (abas, user) => {
  const { tabs } = abas;
  console.log('lint eu te amo');
  return (
    <nav>
      {tabs.map((aba) => {
        console.log('lint');
        return <a key={ aba } href="##">{ aba }</a>;
      })}
      <span>{ user }</span>
      <button type="button">Sair</button>
    </nav>
  );
};

export default Navbar;
