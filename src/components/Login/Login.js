import './Login.css';
import '../Form/Form.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login ({ handleLogin, error }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [isValidForm, setIsValidForm] = useState(false);

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);

    const emailInputElement = e.target;
    const emailErrorElement = document.getElementById("emailError");
    const isEmailValid = emailInputElement.validity.valid;
    e.target.value === '' ? emailErrorElement.textContent = 'Заполните поле Email.' : emailErrorElement.textContent = 'Введите корректный E-mail.';
    !isEmailValid ? emailErrorElement.style.visibility = 'visible' : emailErrorElement.style.visibility = 'hidden';

    checkFormValidity();
  }

  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);

    const passwordInputElement = e.target;
    const passwordErrorElement = document.getElementById("passwordError");
    const isPasswordValid = passwordInputElement.validity.valid;

    e.target.value === '' ? passwordErrorElement.textContent = 'Введите пароль.' : passwordErrorElement.textContent = 'Введите корректный пароль.';
    !isPasswordValid ? passwordErrorElement.style.visibility = 'visible' : passwordErrorElement.style.visibility = 'hidden';

    checkFormValidity();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitErrorElement = document.getElementById("submitError");
    const signInData = {
      email,
      password
    }
    handleLogin(signInData);

    setErrorMessage(error);
    submitErrorElement.style.visibility = 'visible';
  }

  const checkFormValidity = () => {
    const formElement = document.getElementById('form');
    const inputElements = Array.from(formElement.querySelectorAll('.form__input'));
    
    const isFormValid = inputElements.every((input) => {
      return input.validity.valid === true;
    })
    setIsValidForm(isFormValid);
  }

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  useEffect(() => {
    const emailErrorElement = document.getElementById("emailError");
    emailErrorElement.style.visibility = 'hidden';

    const passwordErrorElement = document.getElementById("passwordError");
    passwordErrorElement.style.visibility = 'hidden';

    const submitErrorElement = document.getElementById("submitError");
    submitErrorElement.style.visibility = 'hidden';
  },[])

  return(
    <div className="login">
      <form id="form" className="form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form__logo"/>
        <h2 className="form__title">Рады видеть!</h2>

        <p className="form__caption">E-mail</p>
        <input required={true} id="email" onChange={handleChangeEmail} name="email" type="email" className="form__input" />
        <p id="emailError" className="form__error"/>

        <p className="form__caption">Пароль</p>
        <input required={true} onChange={handleChangePassword} type="password" className="form__input" minLength="3" maxLength="8" />
        <p id="passwordError" className="form__error"/>

        <button disabled={!isValidForm} type="submit" className="form__button">Войти</button>
        <p id="submitError" className="form__error">{errorMessage}</p>
        <p className="form__signature">Ещё не зарегистрированы?<Link to="/signup" className="form__link">Регистрация</Link></p>
      </form>
    </div>
  )
}

export default Login;