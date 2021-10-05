import './Login.css';
import '../Form/Form.css';
import { Link } from 'react-router-dom';

function Login () {

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return(
    <div className="login">
      <form className="form">
        <div className="form__logo"></div>
        <h2 className="form__title">Рады видеть!</h2>

        <p className="form__caption">E-mail</p>
        <input className="form__input"></input>
        <p className="form__error">-</p>

        <p className="form__caption">Пароль</p>
        <input type="password" className="form__input"></input>
        <p className="form__error">-</p>

        <button onClick={handleLogin} type="submit" className="form__button">Войти</button>
        <p className="form__signature">Ещё не зарегистрированы?<Link to="/signup" className="form__link">Регистрация</Link></p>
      </form>
    </div>
  )
}

export default Login;