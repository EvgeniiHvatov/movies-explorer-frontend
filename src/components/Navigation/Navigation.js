import './Navigation.css';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav className="navigation">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="navigation__link">
              <NavLink
                to="/signup"
                className={`navigation__button navigation__button_signup ${pathname !== "/" && 'navigation__button_type_black'}`}
              >
                Регистрация
              </NavLink>
              <NavLink
                to="/signin"
                className="navigation__button navigation__button_signin"
              >
                Войти
              </NavLink>
            </div>
          }
        ></Route>
      </Routes>
    </nav>
  );
}

export default Navigation;