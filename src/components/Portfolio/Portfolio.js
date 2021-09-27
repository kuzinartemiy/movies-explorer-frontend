import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio () {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a target="_blank" rel="noreferrer" href="https://kuzinartemiy.github.io/how-to-learn" className="portfolio__link">
            <p className="portfolio__link-item">Статичный сайт</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a target="_blank" rel="noreferrer" href="https://kuzinartemiy.github.io/russian-travel" className="portfolio__link">
            <p className="portfolio__link-item">Адаптивный сайт</p>
            <div className="portfolio__link-icon"></div>
          </a>
        </li>
        <li className="portfolio__list-item">
          <Link to="/movies" className="portfolio__link">
            <p className="portfolio__link-item">Одностраничное приложение</p>
            <div className="portfolio__link-icon"></div>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;