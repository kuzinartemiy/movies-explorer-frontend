import './FilterCheckbox.css';

function FilterCheckbox ({ handleChange }) {
  
  const handleChecked = (e) => {
    handleChange(e.target.checked);
  }

  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__label">
        <input onChange={handleChecked} type="checkbox" className="filterCheckbox__check"/>
        <span className="filterCheckbox__slider"/>
        <p className="filterCheckbox__caption">Короткометражки</p>
      </label>
    </div>
  )
}

export default FilterCheckbox;