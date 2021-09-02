import React from 'react';
import FormRegistro from '../components/FormRegistro';

import Header from '../components/Header';
import ListaUsers from '../components/ListaUsers';

export default function Gerenciamento() {
  return (
    <>
      <Header />
      <main>
        <FormRegistro />
        <ListaUsers />
      </main>
    </>
  );
}
