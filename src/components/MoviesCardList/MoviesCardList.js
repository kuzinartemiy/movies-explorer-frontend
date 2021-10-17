import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList ({ initialMovies, maxMovies, toggleLike, checkSaved, isLoading, searchResponse }) {
  let moviesToRender = [];
  const lastSearchMovies = JSON.parse(localStorage.getItem('lastSearchMovies'));
  let stateCaptionContent = '';

  const location = window.location.pathname;

  if(location === '/movies') {
    if(!lastSearchMovies) {
      stateCaptionContent = 'Начните новый поиск фильмов.';
    } else if(lastSearchMovies.length === 0) {
      stateCaptionContent = 'По запросу ничего не найдено.';
    }
  } else if(location === '/saved-movies') {
    if(searchResponse === '') {
      stateCaptionContent = 'Вы еще не добавили фильм.';
    } else {
      stateCaptionContent = searchResponse;
    }
  }
  
  for (let i = 0; i < maxMovies; i++) {
    if (initialMovies[i]) moviesToRender.push(initialMovies[i]);
  }
  
  return (
    isLoading ? <Preloader isLoading={isLoading} /> : 
    <>
      {moviesToRender.length !== 0 ? (
        <ul className="moviesCardList">
          {moviesToRender.map((movie) => (
            <MoviesCard 
              key={movie.movieId}
              movieData={movie}
              toggleLike={toggleLike}
              checkSaved={checkSaved}
            />
          ))}
        </ul>
      ) : (
        <p className='movies__caption'>{stateCaptionContent}</p>
        )
      }
    </>
  )
}

export default MoviesCardList;