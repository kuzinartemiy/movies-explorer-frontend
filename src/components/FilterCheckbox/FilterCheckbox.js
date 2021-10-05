import './FilterCheckbox.css';

function FilterCheckbox () {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__label">
        <input type="checkbox" className="filterCheckbox__check"/>
        <span className="filterCheckbox__slider"/>
        <p className="filterCheckbox__caption">Короткометражки</p>
      </label>
    </div>
  )
}

export default FilterCheckbox;