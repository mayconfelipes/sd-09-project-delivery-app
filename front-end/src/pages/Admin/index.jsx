import React, { useEffect, useState } from 'react';
import NavBarAdmin from '../../components/NavbarAdmin';
import api from '../../service/axiosApi';
import validateUserData from '../../helpers/validateUserData';
import AdminRegisterAlert from '../../components/alerts/AdminRegisterAlert';
import './Admin.css';

const Admin = () => {
  const typesRoles = [
    { name: 'Vendedor', role: 'seller' },
    { name: 'Comprador', role: 'customer' },
    { name: 'Administrador', role: 'admin' },
  ];

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [invalidRegister, setInvalidRegister] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });

  useEffect(() => {
    const dataIsValid = validateUserData(newUser);
    setBtnDisabled(!dataIsValid);
  }, [newUser]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setNewUser({ ...newUser, [name]: value });
  };

  const handeClick = async (event) => {
    event.preventDefault();
    const body = {
      ...newUser,
    };

    const { token } = JSON.parse(localStorage.getItem('user'));

    await api
      .post('/admin/register', body, { headers: { authorization: token } })
      .then(({ data }) => {
        console.log(data);
        setInvalidRegister(false);
      })
      .catch((err) => {
        setInvalidRegister(true);
        console.log(err);
      });
  };

  return (
    <div>
      <NavBarAdmin />
      <div className="register-admin">
        <p>Cadastrar Novo Usuario</p>
        <div className="inputs-and-button-register">
          <label htmlFor="name" className="inputs">
            Nome
            <input
              type="text"
              id="name"
              name="name"
              value={ newUser.name }
              placeholder="Nome e Sobrenome"
              onChange={ handleInputChange }
              data-testid="admin_manage__input-name"
            />
          </label>
          <label htmlFor="email" className="inputs">
            E-mail
            <input
              type="text"
              id="email"
              name="email"
              value={ newUser.email }
              placeholder="seu-email@site.com.br"
              onChange={ handleInputChange }
              data-testid="admin_manage__input-email"
            />
          </label>
          <label htmlFor="password" className="inputs">
            Senha
            <input
              type="text"
              id="password"
              name="password"
              value={ newUser.password }
              placeholder="******"
              onChange={ handleInputChange }
              data-testid="admin_manage__input-password"
            />
          </label>
          <label htmlFor="role" className="inputs">
            Tipo
            <select
              id="role"
              name="role"
              value={ newUser.role }
              onChange={ handleInputChange }
              data-testid="admin_manage__select-role"
            >
              {typesRoles.map(({ name, role }) => (
                <option key={ role } value={ role }>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ btnDisabled }
            onClick={ handeClick }
          >
            CADASTRAR
          </button>
          {invalidRegister && <AdminRegisterAlert />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
