import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoveisCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Movies.css';

function Movies () {
  return (
    <div className="movies">
      <div className="movies__search">
        <h1 className="movies__title">Фильм</h1>
        <SearchForm />
      </div>
      <FilterCheckbox />
      {/* <Preloader /> */}
      <MoviesCardList />
      <button className="movies__more-btn">Ещё</button>
    </div>
  )
}

export default Movies;