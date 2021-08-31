import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import fetchPOST from '../services/fetchPOST';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      email: '',
      password: '',
      toggleMessage: false,
      message: '',
      redirect: false,
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.toggleButton());
  }

  toggleButton() {
    const { email, password } = this.state;
    const number = 6;

    const validateEmail = /^[\S.]+@[a-z]+\.\w{2,3}$/g.test(email);

    if (validateEmail && password.length >= number) {
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
    const { email, password } = this.state;

    try {
      const result = await fetchPOST('login', { email, password });
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
    const { email, password, toggleMessage, message, disabled, redirect } = this.state;
    return (
      <div>
        <h3>Login</h3>
        <div>
          <label htmlFor="email">
            Login
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="common_login__input-password"
            />
          </label>
          <button
            type="button"
            data-testid="common_login__button-login"
            onClick={ this.fetchAPI }
            disabled={ disabled }
          >
            LOGIN
          </button>
          { toggleMessage
            && <p data-testid="common_login__element-invalid-email">{ message }</p> }
          <Link to="/register">
            <button
              type="button"
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </button>
          </Link>
        </div>
        { redirect && <Redirect to="/customer/products" /> }
      </div>
    );
  }
}

export default Login;
