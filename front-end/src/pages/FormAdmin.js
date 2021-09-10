import React from 'react';

import HeaderAdmin from '../components/HeaderNav';
import fetchGET from '../services/fetchGET';
import fetchPOST from '../services/fetchPOST';
import UsersDetailsAdmin from '../components/UsersDetailsAdmin';
import socket from '../utils/socket';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  role: 'customer',
  toggleButton: true,
};

class FormAdmin extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      name: '',
      email: '',
      password: '',
      role: 'customer',
      toggleButton: true,
      toggleMessage: true,
      message: '',
    };

    this.table = this.table.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.createUser = this.createUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
    this.getAllUsers();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.toggleButton());
  }

  getAllUsers() {
    socket.on('getUsers', (users) => {
      this.setState({
        users,
      });
    });
  }

  toggleButton() {
    const { name, email, password } = this.state;
    const numberName = 12;
    const numberPassword = 6;
    const validateEmail = /^[\S]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g.test(email);

    if (validateEmail && password.length >= numberPassword && name.length >= numberName) {
      this.setState({
        toggleButton: false,
      });
    } else {
      this.setState({
        toggleButton: true,
      });
    }
  }

  async fetchAPI() {
    const arrUsers = await fetchGET('users');
    this.setState({
      users: arrUsers,
    });
  }

  async createUser() {
    const { name, email, password, role } = this.state;
    try {
      await fetchPOST('users/admin', { name, email, password, role });
      this.setState({
        toggleMessage: false,
      });
    } catch (error) {
      this.setState({
        message: error.response.data.message,
        toggleMessage: true,
      });
    }
    this.fetchAPI();
    this.setState(INITIAL_STATE);
  }

  table() {
    const { users } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          { users.map((user, index) => (
            <UsersDetailsAdmin
              key={ `${user.id}${index}` }
              user={ user }
              indexUser={ index }
            />
          )) }
        </tbody>
      </table>
    );
  }

  messageToggle() {
    const { toggleMessage, message } = this.state;
    return (
      toggleMessage
        && <p data-testid="admin_manage__element-invalid-register">{ message }</p>
    );
  }

  renderSelect() {
    return (
      <label className="label-tipo" htmlFor="typeUser">
        <p>Tipo:</p>
        <select
          id="typeUser"
          data-testid="admin_manage__select-role"
          name="role"
          onChange={ this.handleChange }
        >
          <option value="customer">Escolha o tipo</option>
          <option value="administrator">P. Administradora</option>
          <option value="seller">P. Vendedora</option>
          <option value="customer">Cliente</option>
        </select>
      </label>
    );
  }

  render() {
    const { name, email, password, toggleButton } = this.state;
    return (
      <div>
        <HeaderAdmin />
        <h3>Cadastrar novo usuário</h3>
        <div className="page-admin-up">
          <div className="form-admin">
            <label className="label-name" htmlFor="name">
              <p>Nome:</p>
              <input
                type="text"
                id="name"
                data-testid="admin_manage__input-name"
                name="name"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
            <label className="label-email" htmlFor="email">
              <p>Email:</p>
              <input
                type="text"
                id="email"
                data-testid="admin_manage__input-email"
                name="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label className="label-password" htmlFor="password">
              <p>Senha:</p>
              <input
                type="password"
                id="password"
                data-testid="admin_manage__input-password"
                name="password"
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
            { this.renderSelect() }
          </div>
          <div className="div-admin-register">
            <button
              className="button-admin-register"
              type="button"
              data-testid="admin_manage__button-register"
              disabled={ toggleButton }
              onClick={ this.createUser }
            >
              CADASTRAR
            </button>
            { this.messageToggle() }
          </div>
        </div>

        <h3>Lista de usuários</h3>
        <div className="table-admin">
          { this.table() }
        </div>
      </div>
    );
  }
}

export default FormAdmin;
