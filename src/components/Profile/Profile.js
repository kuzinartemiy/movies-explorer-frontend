import './Profile.css';
import '../Form/Form.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile ({ loggedIn, handleSignOut, onUpdateUser, error }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

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
  
  const handleUpdateUser = (e) => {
    e.preventDefault();

    const submitErrorElement = document.getElementById("submitError");

    const userData = {
      name,
      email,
    }
    onUpdateUser(userData);

    setErrorMessage(error);
    submitErrorElement.style.visibility = 'visible';
  }

  const checkFormValidity = () => {
    const formElement = document.getElementById('form');
    const inputElements = Array.from(formElement.querySelectorAll('.profile__value-input'));
    
    const isFormValid = inputElements.every((input) => {
      return input.validity.valid === true;
    })
    setIsValidForm(isFormValid);
  }

  const handleSignOutClick = () => {
    handleSignOut();
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  useEffect(() => {
    const nameErrorElement = document.getElementById("nameError");
    nameErrorElement.style.visibility = 'hidden';

    const emailErrorElement = document.getElementById("emailError");
    emailErrorElement.style.visibility = 'hidden';

    const submitErrorElement = document.getElementById("submitError");
    submitErrorElement.style.visibility = 'hidden';
  },[])

  return (
    <>
    <Header loggedIn={loggedIn} />
    <div className="profile">
      <form id="form" onSubmit={handleUpdateUser} className="profile__form" autoComplete="off">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <ul className="profile__info">
          <li className="profile__info-item">
            <p className="profile__caption">Имя</p>
            <input required onChange={handleChangeName} type="text" className="profile__value-input" placeholder={currentUser.name} minLength="3" maxLength="10"/>
          </li>
          <li><p id="nameError" className="profile__error"/></li>
          <li className="profile__info-item">
            <p className="profile__caption">E-mail</p>
            <input required onChange={handleChangeEmail} type="email" className="profile__value-input" placeholder={currentUser.email}/>
          </li>
          <li><p id="emailError" className="profile__error"/></li>
        </ul>

        <ul className="profile__links">
          <li className="profile__links-item">
            <button disabled={!isValidForm} type="submit" className="profile__signup-button">Редактировать</button>
            <p id="submitError" className="profile__error">{errorMessage}</p>
          </li>
          <li className="profile__links-item"><Link onClick={handleSignOutClick} className="profile__signout" to="/">Выйти из аккаунта</Link></li>
        </ul>
      </form>
    </div>
    </>
  )
}

export default Profile;