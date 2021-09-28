import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard () {
  const [isLiked, setLike] = useState(false);

  const stateLikeClass = `moviesCard__like ${isLiked ? 'moviesCard__like_liked' : '' }`

  const handleLikeCard = () => {
    setLike(!isLiked);
  }

  return (
    <li className="moviesCard">
      <img alt="Изображение карточки" src="https://images.unsplash.com/photo-1632227817516-71b969768e57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=824&q=80" className="moviesCard__image"></img>
      <div className="moviesCard__info">
        <div className="moviesCard__text">
          <h2 className="moviesCard__title">33 слова о дизайне</h2>
          <p className="moviesCard__duration">1ч 47м</p>
        </div>
        <button onClick={handleLikeCard} className={stateLikeClass}></button>
      </div>
    </li>
  )
}

export default MoviesCard;