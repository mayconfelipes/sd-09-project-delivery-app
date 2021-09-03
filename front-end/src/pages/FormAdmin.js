import React from 'react';

import HeaderAdmin from '../components/HeaderNav';
import fetchGET from '../services/fetchGET';
import fetchPOST from '../services/fetchPOST';
import UsersDetailsAdmin from '../components/UsersDetailsAdmin';

class FormAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: '',
      email: '',
      password: '',
      role: '',
      toggleButton: true,
    };

    this.table = this.table.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.toggleButton());
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
    await fetchPOST('users', { name, email, password, role });
  }

  table() {
    const { users } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
          </tr>
          <tr>
            <th>Nome</th>
          </tr>
          <tr>
            <th>Email</th>
          </tr>
          <tr>
            <th>Tipo</th>
          </tr>
          <tr>
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

  render() {
    const { name, email, password, toggleButton } = this.state;
    return (
      <div>
        <HeaderAdmin />

        <div id="form">
          <label htmlFor="fullName">
            Nome:
            <input
              type="text"
              id="fullName"
              data-testid="admin_manage__input-name"
              name="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              id="email"
              data-testid="admin_manage__input-email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="text"
              id="password"
              data-testid="admin_manage__input-password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="typeUser">
            Tipo:
            <select
              id="typeUser"
              data-testid="admin_manage__select-role"
              name="role"
              onChange={ this.handleChange }
            >
              <option value="">Escolha o tipo</option>
              <option value="administrador">P. Administradora</option>
              <option value="seller">P. Vendedora</option>
              <option value="customer">Cliente</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ toggleButton }
            onClick={ this.createUser }
          >
            CADASTRAR
          </button>
        </div>

        <div id="table">
          { this.table() }
        </div>
      </div>
    );
  }
}

export default FormAdmin;
