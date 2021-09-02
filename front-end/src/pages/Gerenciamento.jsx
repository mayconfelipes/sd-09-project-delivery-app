import React, { useState } from 'react';
import { Redirect } from 'react-router';
import FormRegistro from '../components/FormRegistro';

import Header from '../components/Header';
import ListaUsers from '../components/ListaUsers';

export default function Gerenciamento() {
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  if (!user || user.role !== 'administrator') {
    localStorage.clear();
    return (<Redirect
      to={ {
        pathname: '/login',
        state: {
          error: 'Você não tem permissão para accessar essa página!',
        },
      } }

    />);
  }

  return (
    <>
      <Header />
      <main>
        <FormRegistro token={ user.token } />
        <ListaUsers token={ user.token } userId={ user.id } />
      </main>
    </>
  );
}
