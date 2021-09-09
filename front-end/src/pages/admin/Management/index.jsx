import React, { useState, useEffect } from 'react';

import Navbar from '../../../components/Navbar';
import PrimaryButton from '../../../components/PrimaryButton';
import DescriptionsBar from '../../../components/DescriptionsBar';

import { createUser, getAllUsers, deleteUser } from '../../../api/admin';

import style from './management.module.scss';

const Management = () => {
  const [userData, setUserData] = useState({
    nameInput: '',
    emailInput: '',
    passwordInput: '',
  });

  const [isDataValid, setIsDataValid] = useState(true);
  const [selectedRole, setSelectedRole] = useState('seller');
  const [allUsers, setAllUsers] = useState([]);
  const [cadasterFailure, setCadasterFailure] = useState(null);
  const [newRequest, setNewRequest] = useState(false);

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

    if (emailValidated && passwordRegex && nameLength) {
      setIsDataValid(false);
    } else {
      setIsDataValid(true);
    }
  }, [selectedRole, userData]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    getAllUsers(token).then((response) => {
      setAllUsers(response);
    });
  }, [cadasterFailure, newRequest]);

  const sendRegisterRequest = async () => {
    const { nameInput, emailInput, passwordInput } = userData;
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await createUser({
      name: nameInput,
      email: emailInput,
      password: passwordInput,
      role: selectedRole,
      token,
    });
    if (response.message) {
      setCadasterFailure(response.message);
    } else {
      setCadasterFailure(false);
    }
    await setNewRequest(!newRequest);
  };

  const handleClickDeleteUser = async (id) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await deleteUser(id, token);
    await setNewRequest(!newRequest);
  };

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
          onLoginClick={ sendRegisterRequest }
        >
          CADASTRAR
        </PrimaryButton>
        { cadasterFailure && (
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            {cadasterFailure}
          </p>
        ) }
      </form>
      <div className={ style.usersContainer }>
        {allUsers.map(({ id, name, email, role }, index) => (
          <DescriptionsBar
            key={ name }
            id={ index }
            itemId={ 1 }
            userOrProductName={ name }
            emailOrQuantity={ email }
            userTypeOrValue={ role }
            deleteOrPrice="Excluir"
            shouldDeleteApear={ false }
            isAboutUser
            dataTestIdId={
              `admin_manage__element-user-table-item-number-${index}`
            }
            deleteUser={ () => handleClickDeleteUser(id) }
            dataTestIdUserOrProductName={
              `admin_manage__element-user-table-name-${index}`
            }
            dataTestIdEmailOrQuantity={
              `admin_manage__element-user-table-email-${index}`
            }
            dataTestIdUserTypeOrValue={
              `admin_manage__element-user-table-role-${index}`
            }
            dataTestIdDeleteOrPrice={
              `admin_manage__element-user-table-remove-${index}`
            }
          />
        ))}
      </div>
    </>
  );
};

export default Management;
