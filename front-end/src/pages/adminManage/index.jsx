import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import * as S from './styled';
import formValidator from '../../services/formValidator';
import { registerUserByAdmin } from '../../services/fetchApi';

const DEFAULT_DATA = {
  name: '',
  email: '',
  password: '',
  role: 'customer',
};

const DEFAULT_ROLES = ['customer', 'seller', 'administrator'];

const AdminManage = () => {
  const [data, setData] = useState(DEFAULT_DATA);
  const [disableButton, setDisableButton] = useState(true);
  const [insertResult, setInsertResult] = useState('');
  const { name, email, password, role } = data;

  const paginas = [
    'GERENCIAR USUÁRIOS */customer_products__element-navbar-link-products',
  ];
  const { name: nameUser } = JSON.parse(localStorage.getItem('user'));

  const handleChange = ({ target: { value, name: nameInput } }) => {
    setData({
      ...data,
      [nameInput]: value,
    });
  };

  const successCode = 201;

  const createNewUser = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const userInfo = { name, email, password, role };
    const result = await registerUserByAdmin(token, userInfo);
    setData(DEFAULT_DATA);
    setInsertResult(result.status);
  };

  useEffect(() => {
    const verify = formValidator(email, password, name);
    setDisableButton(!verify);
  }, [data, disableButton, email, name, password, role]);

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
          onChange={ handleChange }
          name="role"
          data-testid="admin_manage__select-role"
        >
          {
            DEFAULT_ROLES.map((option) => (
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
          onClick={ createNewUser }
        >
          CADASTRAR
        </button>
        {
          (insertResult !== '' && insertResult !== successCode)
            && <p data-testid="admin_manage__element-invalid-register">Deu ruim</p>
        }
      </S.FormNewUser>
    </div>
  );
};

export default AdminManage;
