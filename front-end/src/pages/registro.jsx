import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../components/input';
import Button from '../components/button';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const checkEmailAndPassword = () => {
    const minimumPasswordSize = 6;
    const re = /.+@[A-z]+[.]com/;
    const isValidEmail = re.test(email);
    const isValidPassword = password.length > minimumPasswordSize;
    if (isValidPassword && isValidEmail) {
      return false;
    }
    return true;
  };

  const emailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const passwordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const onClick = () => {
    setMealsToken();
    setCocktailsToken();
    setUser(email);
    setShouldRedirect(true);
  };

  return (
    <div className="registro">
      { shouldRedirect ? (<Redirect to="/login" />) : (
        <form>
          <div className="form-group">
            <Input
              className="form-control"
              id="exampleInputName"
              aria-describedby="NamelHelp"
              name="Name"
              type="Name"
              placeholder="Seu nome"
              data-testid="common_register__input-name"
              onChange={ emailChange }
            />
          </div>
          <div className="form-group">
            <Input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              type="email"
              placeholder="Seu-email@site.com.br"
              data-testid="common_register__input-email"
              onChange={ emailChange }
            />
          </div>
          <div className="form-group">
            <Input
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              type="password"
              placeholder="*********"
              data-testid="common_register__input-password"
              onChange={ passwordChange }
            />
          </div>
          <Button
            className="btn btn-success"
            name="Cadastrar"
            data-testid="common_register__button-register"
            disabled={ checkEmailAndPassword() }
            onClick={ onClick }
          />
          <spam data-testid="common_register__element-invalid_register">erros aqui</spam>
        </form>
      )}
    </div>
  );
}

export default Registro;
