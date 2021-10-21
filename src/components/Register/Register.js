import './Register.css';
import '../Form/Form.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Register ({ handleRegister, error }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [isValidForm, setIsValidForm] = useState(false);

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);

    const nameInputElement = e.target;
    const nameErrorElement = document.getElementById("nameError");
    const isNameValid = nameInputElement.validity.valid;

    e.target.value === '' ? nameErrorElement.textContent = 'Введите имя.' : nameErrorElement.textContent = 'Введите корректное имя.';
    !isNameValid ? nameErrorElement.style.visibility = 'visible' : nameErrorElement.style.visibility = 'hidden';

    checkFormValidity();
  }

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
    const signUpData = {
      name,
      email,
      password,
    }

    handleRegister(signUpData);
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
    const nameErrorElement = document.getElementById("nameError");
    nameErrorElement.style.visibility = 'hidden';

    const emailErrorElement = document.getElementById("emailError");
    emailErrorElement.style.visibility = 'hidden';

    const passwordErrorElement = document.getElementById("passwordError");
    passwordErrorElement.style.visibility = 'hidden';

    const submitErrorElement = document.getElementById("submitError");
    submitErrorElement.style.visibility = 'hidden';
  },[])

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return(
    <div className="register">
      <form id="form" className="form" onSubmit={handleSubmit} autoComplete="off">
        <div className="form__logo"/>
        <h2 className="form__title">Добро пожаловать!</h2>

        <p className="form__caption">Имя</p>
        <input required={true} id="name" onChange={handleChangeName} name="name" className="form__input" minLength="3" maxLength="10"/>
        <p id="nameError" className="form__error"/>

        <p className="form__caption">E-mail</p>
        <input required={true} id="email" onChange={handleChangeEmail} name="email" type="email" className="form__input" />
        <p id="emailError" className="form__error"/>

        <p className="form__caption">Пароль</p>
        <input required={true} onChange={handleChangePassword} type="password" className="form__input" minLength="3" maxLength="8" />
        <p id="passwordError" className="form__error"/>

        <button disabled={!isValidForm} type="submit" className="form__button">Зарегистрироваться</button>
        <p id="submitError" className="form__error">{errorMessage}</p>
        <p className="form__signature">Уже зарегистрированы?<Link to="/signin" className="form__link">Войти</Link></p>
      </form>
    </div>
  )
}

export default Register;