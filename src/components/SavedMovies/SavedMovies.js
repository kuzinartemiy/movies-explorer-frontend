import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

function SavedMovies ({ 
  onSubmitSearch,
  isLoading,
  savedMovies,
  durationFilter,
  checkSaved,
  toggleLike,
  loggedIn,
  setPreloader,
  searchResponse
  }) {
  
  const [maxMovies, setMaxMovies] = useState(3);
  const [shortMovies, setShortMovies] = useState([]);
  const [isDurationFilter, setDurationFilter] = useState(false);

  const stateMoreBtnClass = `movies__more-btn ${savedMovies.length <= maxMovies ? 'movies__more-btn_hidden' : ''}`;

  useEffect(() => {
    if (isDurationFilter) setShortMovies(durationFilter(savedMovies));
  },[isDurationFilter])

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
        initialMovies={ isDurationFilter ? shortMovies : savedMovies }
        maxMovies={maxMovies}
        toggleLike={toggleLike}
        checkSaved={checkSaved}
        searchResponse={searchResponse}
      />
      <button onClick={changeMaxMovies} className={stateMoreBtnClass}>Ещё</button>
    </div>
    <Footer />
    </>
  )
}

export default SavedMovies;