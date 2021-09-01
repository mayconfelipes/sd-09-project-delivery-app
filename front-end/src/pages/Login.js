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
      redirect: '',
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

    const validateEmail = /^[\S]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g.test(email);

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
        redirect: result.role,
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
    const user = JSON.parse(localStorage.getItem('user')) || {};

    if (user.role === 'customer') {
      return <Redirect to="/customer/products" />;
    }

    if (user.role === 'seller') {
      return <Redirect to="/seller/orders" />;
    }

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
        { redirect === 'customer' && <Redirect to="/customer/products" /> }
        { redirect === 'seller' && <Redirect to="/seller/orders" /> }
      </div>
    );
  }
}

export default Login;
