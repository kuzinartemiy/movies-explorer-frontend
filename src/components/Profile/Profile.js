import './Profile.css';
import '../Form/Form.css';
import { Link } from 'react-router-dom';

function Profile () {
  return (
    <div className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <ul className="profile__info">
        <li className="profile__info-item">
          <p className="profile__caption">Имя</p>
          <p className="profile__value">Виталий</p>
        </li>
        <li className="profile__info-item">
          <p className="profile__caption">E-mail</p>
          <p className="profile__value">pochta@yandex.ru</p>
        </li>
      </ul>

      <ul className="profile__links">
        <li className="profile__links-item">Редактировать</li>
        <li className="profile__links-item"><Link className="profile__signout" to="/">Выйти из аккаунта</Link></li>
      </ul>
    </div>
  )
}

export default Profile;