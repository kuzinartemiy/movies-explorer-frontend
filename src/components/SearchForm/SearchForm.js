import './SearchForm.css';

function SearchForm () {
  return (
    <div className="searchForm">
      <input required placeholder="Фильм" className="searchForm__input"/>
      <button className="searchForm__button"></button>
    </div>
  )
}

export default SearchForm;