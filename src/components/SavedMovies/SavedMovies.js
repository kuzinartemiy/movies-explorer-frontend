import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoveisCardList';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SavedMovies () {
  return (
    <div className="movies">
      <div className="movies__search">
        <SearchForm />
      </div>
      <FilterCheckbox />
      {/* <Preloader /> */}
      <MoviesCardList />
    </div>
  )
}

export default SavedMovies;