import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createInput, createButton } from '../utils/creators';
import { emailOptions, passwordOptions } from '../data/InputOptions';
import { FormSection, ErrorMessage } from '../components';
import { login } from '../services/api';
import { checkLogin } from '../utils/checkFormats';
import { loginButton, registerButton } from '../data/ButtonOptions';
import rockGlass from '../images/rockGlass.svg';

const route = 'common_login';

function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const handleChange = ({ target: { type, value } }) => {
    setState({ ...state, [type]: value });
  };

  const onClick = async () => {
    const data = await login(state);
    if (data.error) return setError(true);
    localStorage.user = JSON.stringify(data);
    return setUser(data);
  };

  if (localStorage.user) return <Redirect to="/" />;

  if (user.id) return <Redirect to="/" />;

  return (
    <FormSection>
      <object data={ rockGlass } type="image/svg+xml">
        Glass
      </object>
      <h1>LOGIN</h1>
      { createInput({ ...emailOptions, onChange: handleChange, route }) }
      { createInput({ ...passwordOptions, onChange: handleChange, route }) }
      { createButton({ ...loginButton, onClick, route, disabled: !checkLogin(state) })}
      <Link to="/register">
        { createButton({ ...registerButton, onClick: () => {}, route }) }
      </Link>
      { error && <ErrorMessage route={ route } field="-email" /> }
    </FormSection>
  );
}

/*
user
  adm@deliveryapp.com
  --adm2@21!!--

  fulana@deliveryapp.com
  fulana@123

  zebirita@email.com
  $#zebirita#$
*/

export default Login;
