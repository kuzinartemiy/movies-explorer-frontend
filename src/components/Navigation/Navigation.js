import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation ({handleSideMenuOpen, isOnMain}) {
  const currentUrl = document.URL;
  const stateNavLinkClass = `navigation__link ${isOnMain ? 'navigation__link_place_main' : ''}`
  
  const setSelectedLink = () => {
    const navElements = document.querySelectorAll('.navigation__link');
    
    navElements.forEach((el) => {
      if(el.href === currentUrl) {
        el.classList.add('navigation__link_type_selected');
      } else {
        el.classList.remove('navigation__link_type_selected');
      }
    })
  }
  
  useEffect(() => {
    setSelectedLink();
  },[currentUrl])

  return (
    <ul className="navigation">
      <li className="navigation__list-item"><Link onClick={handleSideMenuOpen} to="/movies" className={stateNavLinkClass}>Фильмы</Link></li>
      <li className="navigation__list-item"><Link onClick={handleSideMenuOpen} to="/saved-movies" className={stateNavLinkClass}>Сохранённые фильмы</Link></li>
    </ul>
  )
}

export default Navigation;