import './Register.css';
import '../Form/Form.css';
import { Link } from 'react-router-dom';

function Register () {
  return(
    <div className="register">
      
      <form className="form">
        <div className="form__logo"></div>
        <h2 className="form__title">Добро пожаловать!</h2>

        <p className="form__caption">Имя</p>
        <input className="form__input"></input>
        <p className="form__error">-</p>

        <p className="form__caption">E-mail</p>
        <input className="form__input"></input>
        <p className="form__error">-</p>

        <p className="form__caption">Пароль</p>
        <input type="password" className="form__input"></input>
        <p className="form__error">-</p>

        <button type="submit" className="form__button">Зарегистрироваться</button>
        <p className="form__signature">Уже зарегистрированы?<Link to="/signin" className="form__link">Войти</Link></p>
      </form>
    </div>
  )
}

export default Register;