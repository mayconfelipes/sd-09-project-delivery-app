import React from 'react';
import NavBar from '../Components/newComponents/NabBar';
import RegisterFormAdmin from '../Components/Organisms/RegisterFormAdmin';

function AdminManager() {
  return (
    <>
      <NavBar />
      <RegisterFormAdmin title="Cadastrar novo usupario" />
    </>
  );
}

export default AdminManager;
