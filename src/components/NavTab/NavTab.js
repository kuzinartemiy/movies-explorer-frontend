import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab ({ isNavTabOpen, setNavTabOpen }) {
  const stateNavTabClass = `navTab ${isNavTabOpen ? 'navTab_opened' : ''}`
  
  const handleCloseNavTab = () => {
    setNavTabOpen(false);
  }

  return (
    <div className={ stateNavTabClass }>
      <div className="navTab__popup">
        <button onClick={handleCloseNavTab} className="navTab__close-btn">CLOSE</button>
        <ul className="navTab__links">
          <Link to="/">Главная</Link>
          <Link to="/movies">Фильмы</Link>
          <Link to="/saved-movies">Сохраненные фильмы</Link>
        </ul>
      </div>
    </div>
  )
}

export default NavTab;