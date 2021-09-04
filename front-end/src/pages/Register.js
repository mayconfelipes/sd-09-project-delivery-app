import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import fetchPOST from '../services/fetchPOST';
import '../styles/Home.css';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      toggleMessage: false,
      name: '',
      email: '',
      password: '',
      message: '',
      disabled: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
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
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  async fetchAPI() {
    const { name, email, password } = this.state;

    try {
      const result = await fetchPOST('users', { name, email, password });
      localStorage.setItem('user', JSON.stringify(result));
      this.setState({
        toggleMessage: false,
        redirect: true,
      });
    } catch (error) {
      this.setState({
        message: error.response.data.message,
        toggleMessage: true,
      });
    }
  }

  render() {
    const {
      toggleMessage,
      name,
      email,
      password,
      message,
      disabled,
      redirect } = this.state;
    return (
      <div className="form">
        <h3>Cadastro</h3>
        <div className="form-container">
          <label className="label-login" htmlFor="name">
            <p className="word-label">Nome</p>
            <input
              className="input-label"
              placeholder="Colocar seu nome Completo"
              type="text"
              id="name"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              data-testid="common_register__input-name"
            />
          </label>
          <label className="label-login" htmlFor="email">
            <p className="word-label">Email</p>
            <input
              className="input-label"
              placeholder="email@email.com"
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="common_register__input-email"
            />
          </label>
          <label className="label-login" htmlFor="password">
            <p className="word-label">Senha</p>
            <input
              className="input-label"
              placeholder="******"
              type="password"
              id="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="common_register__input-password"
            />
          </label>
          <button
            className="btn-login"
            type="button"
            data-testid="common_register__button-register"
            onClick={ this.fetchAPI }
            disabled={ disabled }
          >
            CADASTRAR
          </button>
          <Link to="/login">
            <button
              className="btn-login"
              type="button"
            >
              LOGIN
            </button>
          </Link>
        </div>
        { toggleMessage
          && <p data-testid="common_register__element-invalid_register">{ message }</p> }
        { redirect && <Redirect to="/customer/products" /> }
      </div>
    );
  }
}

export default Register;
