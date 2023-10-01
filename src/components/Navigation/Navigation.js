import './Navigation.css';
import { NavLink, Route, Routes } from 'react-router-dom';

function Navigation() {
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
                className="navigation__button navigation__button_signup"
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