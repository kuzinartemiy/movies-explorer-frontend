import './MoviesCard.css';

const BASE_URL = 'https://api.nomoreparties.co';

function MoviesCard ({ movieData, toggleLike, checkSaved }) {
  const isSaved = checkSaved(movieData);
  
  const { nameRU, duration } = movieData;

  const isOnSavedMovies = window.location.pathname === '/saved-movies';

  const stateLikeClass = `moviesCard__like ${isSaved ? 'moviesCard__like_liked' : '' }`;

  const stateTrailerLink = `${isOnSavedMovies ? movieData.trailer : movieData.trailerLink}`;
  const stateImageUrl = `${isOnSavedMovies ? movieData.image : BASE_URL + movieData.image.url}`;

  const handleLikeCard = () => {
    toggleLike(movieData, isSaved);
  }

  const durationTime = () => {
    if (duration % 60 === 0) {
      return `${duration / 60}ч`;
    }
    if (duration < 60) {
      return `${duration % 60}м`;
    }
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`;
  }

  return (
    <li className="moviesCard">
      <a className="moviesCard__link" href={stateTrailerLink} target="_blank" rel="noreferrer">
        <img alt="Изображение карточки" src={stateImageUrl} className="moviesCard__image"/>
      </a>
      <div className="moviesCard__info">
        <div className="moviesCard__text">
          <h2 className="moviesCard__title">{nameRU}</h2>
          <p className="moviesCard__duration">{durationTime()}</p>
        </div>
        <button onClick={handleLikeCard} className={stateLikeClass}/>
      </div>
    </li>
  )
}

export default MoviesCard;