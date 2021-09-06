import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import * as S from './styled';
import formValidator from '../../services/formValidator';

const DEFAULT_DATA = {
  name: '',
  email: '',
  password: '',
  selectedRole: 'Selecione',
  typeArray: ['Selecione', 'Administrador', 'Vendedor', 'Comprador'],
};

const AdminManage = () => {
  const [data, setData] = useState(DEFAULT_DATA);
  const [disableButton, setDisableButton] = useState(true);
  const { name, email, password, selectedRole, typeArray } = data;

  const paginas = [
    'GERENCIAR USUÁRIOS /customer_products__element-navbar-link-products',
  ];
  const { name: nameUser } = JSON.parse(localStorage.getItem('user'));

  const handleChange = ({ target: { value, name: nameInput } }) => {
    setData({
      ...data,
      [nameInput]: value,
    });
  };

  const handleRole = ({ target: { value } }) => {
    setData({
      ...data,
      selectedRole: value,
    });
  };

  useEffect(() => {
    const verify = formValidator(email, password, name, selectedRole);
    setDisableButton(!verify);
  }, [data, disableButton, email, name, password, selectedRole]);

  return (
    <div>
      <Navbar abas={ paginas } user={ nameUser } />
      <S.FormNewUser>
        <S.Input
          type="text"
          onChange={ handleChange }
          name="name"
          value={ name }
          data-testid="admin_manage__input-name"
        />
        <S.Input
          type="email"
          onChange={ handleChange }
          name="email"
          value={ email }
          data-testid="admin_manage__input-email"
        />
        <S.Input
          type="password"
          onChange={ handleChange }
          name="password"
          value={ password }
          data-testid="admin_manage__input-password"
        />
        <S.SelectRole
          value={ selectedRole }
          onChange={ handleRole }
          data-testid="admin_manage__select-role"
        >
          {
            typeArray.map((option) => (
              <option
                key={ option }
                value={ option }
              >
                { option }
              </option>
            ))
          }
        </S.SelectRole>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ disableButton }
        >
          CADASTRAR
        </button>
      </S.FormNewUser>
    </div>
  );
};

export default AdminManage;
