import { Link } from 'react-router-dom';
import'./NotFoundError.css';

function NotFoundError () {
  return(
    <div className="notFoundError">
      <div className="notFoundError__container">
        <div className="notFoundError__content">
          <h2 className="notFoundError__title">404</h2>
          <h3 className="notFoundError__subtitle">Страница не найдена</h3>
        </div>
        <Link to="/" className="notFoundError__link">Назад</Link>
      </div>
    </div>
  )
}

export default NotFoundError;
