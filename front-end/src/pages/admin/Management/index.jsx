import React, { useState, useEffect } from 'react';
// import P from 'prop-types';

import style from './management.module.scss';
import Navbar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';

const Management = () => {
  const [userData, setUserData] = useState({
    nameInput: '',
    emailInput: '',
    passwordInput: '',
  });

  const [isDataValid, setIsDataValid] = useState(true);
  const [selectedRole, setSelectedRole] = useState('seller');
  // const [isLogged, setIsLoggedStatus] = useState(false);
  // const [cadasterFailure, setCadasterFailure] = useState(false);

  function handleInputChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  useEffect(() => {
    const { emailInput, passwordInput, nameInput } = userData;
    const emailValidated = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput);
    const passwordRegex = new RegExp(/[\w\D]{6}/g).test(passwordInput);
    const nameLength = new RegExp(/[\w\D]{12}/g).test(nameInput);
    console.log(selectedRole);
    if (emailValidated && passwordRegex && nameLength) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }
  }, [selectedRole, userData]);

  // const sendLoginRequest = async () => {
  //   const { nameInput, emailInput, passwordInput } = userData;
  //   const role = 'customer';
  //   const { token } = await register(nameInput, emailInput, passwordInput, role);
  //   localStorage.setItem('user', JSON.stringify({ name: nameInput, token }));
  //   if (token) setIsLoggedStatus(true);
  //   else setCadasterFailure(true);
  // };

  return (
    <>
      <Navbar orders="" products="GERENCIAR USUÁRIOS" />
      <h1>Cadastrar novo usuário</h1>
      <form className={ style.inputContainer }>
        <label htmlFor="input" className={ style.inputStyle }>
          Nome
          <input
            id="input"
            data-testid="admin_manage__input-name"
            name="nameInput"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="input" className={ style.inputStyle }>
          Email
          <input
            id="input"
            data-testid="admin_manage__input-email"
            name="emailInput"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="input" className={ style.inputStyle }>
          Senha
          <input
            id="input"
            data-testid="admin_manage__input-password"
            name="passwordInput"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="orderData" className={ style.inputStyle }>
          P. Vendedora Responsável
          <select
            name="role"
            id="orderData"
            data-testid="admin_manage__select-role"
            onChange={ ({ target: { value } }) => setSelectedRole(value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <PrimaryButton
          isBtnDisabled={ isDataValid }
          dataTestId="admin_manage__button-register"
          // onLoginClick={ sendLoginRequest }
        >
          CADASTRAR
        </PrimaryButton>
        {/* { cadasterFailure && (
          <p
            data-testid="common_register__element-invalid_register"
          >
            Usuário já existe
          </p>
        ) } */}

      </form>
    </>
  );
};

export default Management;

// Management.propTypes = {
//   children: P.node.isRequired,
// };
