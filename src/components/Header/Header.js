import './Header.css';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header ({ loggedIn }) {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const currentPath = window.location.pathname;
  const isOnMain = currentPath === '/';

  const stateHeaderClass = `header ${isOnMain ? 'header_place_main' : ''}`;
  const stateHeaderLinkClass = `header__link ${isOnMain ? 'header__link_place_main' : ''}`
  const stateSideMenuClass = `header__sidebar ${isSideMenuOpen ? 'header__sidebar_opened' : ''}`;
  const stateNavClass = `header__nav ${!loggedIn ? 'header__nav_hidden' : ''}`;
  const stateHeaderProfileClass = `header__profile ${loggedIn ? 'header__profile_hidden' : ''}`;
  const stateLoggedInHeaderProfileClass = `header__loggedIn-profile ${!loggedIn ? 'header__loggedIn-profile_hidden' : ''}`;
  
  const handleSideMenuOpen = () => {
    setSideMenu(!isSideMenuOpen);
  }

  return (
    <header className={stateHeaderClass}>
      <div className="header__nav-block">
        <Link className="header__logo" to="/"></Link>
        <div className={stateNavClass}>
          <Navigation isOnMain={isOnMain} />
        </div>
      </div>
      <ul className={stateHeaderProfileClass}>
        <li><Link to="/signup" className={stateHeaderLinkClass}>Регистрация</Link></li>
        <li><Link to="/signin"><button className="header__signin-btn">Войти</button></Link></li>
      </ul>
      <ul className={stateLoggedInHeaderProfileClass}>
        <li><Link to="/profile" className={stateHeaderLinkClass}>Аккаунт</Link></li>
        <li><Link to="/profile"><button className="header__profile-btn" /></Link></li>
      </ul>
      <button onClick={handleSideMenuOpen} className="header__burger-btn"></button>

      <div className={stateSideMenuClass}>
        <div className="header__side-popup">
          {loggedIn ? (
            <div className="header__side-nav-content">
              <button onClick={handleSideMenuOpen} className="header__close-btn"/>
              <div className="header__nav header__nav_place_sidebar">
                <Link to="/" onClick={handleSideMenuOpen} className="header__side-main">Главная</Link>
                <Navigation isOnMain={false} handleSideMenuOpen={handleSideMenuOpen}/>
              </div>
            </div>
          ) : (
            <></>
          )}
          {!loggedIn ? (
            <div className="header__side-auth">
              <button onClick={handleSideMenuOpen} className="header__close-btn"/>
              <ul className="header__profile header__profile_place_sidebar">
                <li>
                  <Link to="/signup" className="header__link header__link_place_sidebar">Регистрация</Link>
                </li>
                <li>
                  <Link to="/signin">
                    <button className="header__signin-btn header__signin-btn_place_sidebar">Войти</button>
                  </Link>
                </li>
              </ul>
            </div>

          ) : (
            <ul className="header__profile header__profile_place_sidebar">
              <ul className="header__loggedIn-profile header__loggedIn-profile_place_sidebar">
                <li><Link to="/profile" className="header__link">Аккаунт</Link></li>
                <li><Link to="/profile"><button className="header__profile-btn" /></Link></li>
              </ul>
            </ul>
          )}
          
        </div>
      </div>
    </header>
  )
}

export default Header;