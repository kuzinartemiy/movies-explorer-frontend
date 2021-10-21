import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies ({
  loggedIn,
  isLoading,
  onSubmitSearch,
  durationFilter,
  setPreloader,
  movies,
  toggleLike,
  checkSaved,
}) {

  const [maxMovies, setMaxMovies] = useState(3);
  const [shortMovies, setShortMovies] = useState([]);
  const [isDurationFilter, setDurationFilter] = useState(false);

  useEffect(() => {
    if (isDurationFilter) setShortMovies(durationFilter(movies));
  }, [isDurationFilter]);

  const stateMoreBtnClass = `movies__more-btn ${movies.length <= maxMovies ? 'movies__more-btn_hidden' : ''}`;

  const changeMaxMovies = () => {
    setMaxMovies(maxMovies + 3);
  }

  return (
    <>
    <Header loggedIn={loggedIn} />
    <div className="movies">
      <SearchForm onSubmit={onSubmitSearch} setPreloader={setPreloader} />
      <FilterCheckbox handleChange={setDurationFilter} />
      <MoviesCardList
        isLoading={isLoading}
        initialMovies={ isDurationFilter ? shortMovies : movies }
        toggleLike={toggleLike}
        checkSaved={checkSaved}
        maxMovies={maxMovies} 
      />
      <button onClick={changeMaxMovies} className={stateMoreBtnClass}>Ещё</button>
    </div>
    <Footer />
    </>
  )
}

export default Movies;