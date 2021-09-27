import './MoviesCard.css';

function MoviesCard () {
  return (
    <li className="moviesCard">
      <div className="moviesCard__image"></div>
      <div className="moviesCard__info">
        <div className="moviesCard__text">
          <h2 className="moviesCard__title">33 слова о дизайне</h2>
          <p className="moviesCard__duration">1ч 47м</p>
        </div>
        <button className="moviesCard__like"></button>
      </div>
    </li>
  )
}

export default MoviesCard;