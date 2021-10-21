import { useState } from 'react';
import './SearchForm.css';

function SearchForm ({ onSubmit, setPreloader }) {
  const [movieSearchQuery, setSearchQuery] = useState('');

  const handleChangeMovie = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPreloader(true);
    onSubmit(movieSearchQuery);
  }

  return (
    <form className="searchForm" onSubmit={handleSearchSubmit} action="#" autoComplete="off">
      <input onChange={handleChangeMovie} required name='inputMovie' placeholder="Фильм" className="searchForm__input"/>
      <button type="submit" className="searchForm__button"/>
    </form>
  )
}

export default SearchForm;