import './NavBar.css';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar({loggedIn}) {
  const { pathname } = useLocation();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleMenuOpening = () => setIsMenuOpened(true);
  const handleMenuClosing = () => setIsMenuOpened(false);

  return (
    <>
      <div className="navbar">
        <button className={`navbar__hamburger-overlay ${pathname === "/" && 'navbar__hamburger-overlay_type_light'}`} type="button" onClick={handleMenuOpening}></button>
        
        <section className="navbar__menu">
          <ul className="navbar__menu-list">
            <li className="navbar__menu-list-item">
              <NavLink
                className={loggedIn ? "navbar__menu-link navbar__menu-link_type_light" : "navbar__menu-link"}
                onClick={handleMenuClosing}
                to="/movies">Фильмы
              </NavLink>
            </li>
            <li className="navbar__menu-list-item">
              <NavLink
                className={loggedIn ? "navbar__menu-link navbar__menu-link_type_light" : "navbar__menu-link"}
                onClick={handleMenuClosing}
                to="/saved-movies">Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <div className="navbar__menu-account">
            <NavLink
              className={loggedIn ? "navbar__menu-account-link navbar__menu-account-link_type_light" : "navbar__menu-account-link"}
              onClick={handleMenuClosing}
              to="/profile">Аккаунт
            </NavLink>
          </div>
        </section>
      </div>

      {isMenuOpened && (
        <section className="drop-down-menu">
          <div className="drop-down-menu__container">
            <button className="drop-down-menu-close-btn" type="button" onClick={handleMenuClosing}></button>
            <ul className="drop-down-menu__menu-list">
              <li className="drop-down-menu__menu-list-item">
                <NavLink
                  className="drop-down-menu__menu-link"
                  onClick={handleMenuClosing}
                  to="/">Главная
                </NavLink>
              </li>
              <li className="drop-down-menu__menu-list-item">
                <NavLink
                  className="drop-down-menu__menu-link"
                  onClick={handleMenuClosing}
                  to="/movies">Фильмы
                </NavLink>
              </li>
              <li className="drop-down-menu__menu-list-item">
                <NavLink
                  className="drop-down-menu__menu-link"
                  onClick={handleMenuClosing}
                  to="/saved-movies">Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
            <div className="drop-down-menu__menu-account">
              <NavLink
                className="drop-down-menu__menu-account-link"
                onClick={handleMenuClosing}
                to="/profile">Аккаунт
              </NavLink>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default NavBar;
