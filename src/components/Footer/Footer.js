import { Routes, Route, NavLink } from 'react-router-dom';

function Footer() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <footer className="footer">
            <h4 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h4>
            <div className="footer__wrapper">
              <p className="footer__text"> &copy; 2023</p>
              <ul className="footer__links">
                <li className="footer__item">
                  <NavLink
                    className="footer__link"
                    to="https://praktikum.yandex.ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Яндекс.Практикум
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink
                    className="footer__link"
                    to="https://github.com/EvgeniiHvatov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </footer>
        }
      ></Route>

      <Route
        exact
        path="/movies/*"
        element={
          <footer className="footer">
            <h4 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h4>
            <div className="footer__wrapper">
              <p className="footer__text"> &copy; 2023</p>
              <ul className="footer__links">
                <li className="footer__item">
                  <NavLink
                    className="footer__link"
                    to="https://praktikum.yandex.ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Яндекс.Практикум
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink
                    className="footer__link"
                    to="https://github.com/EvgeniiHvatov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </footer>
        }
      ></Route>

      <Route
        exact
        path="/saved-movies/*"
        element={
          <footer className="footer">
            <h4 className="footer__title">
              Учебный проект Яндекс.Практикум х BeatFilm.
            </h4>
            <div className="footer__wrapper">
              <p className="footer__texts"> &copy; 2023</p>
              <ul className="footer__links">
                <li className="footer__item">
                  <NavLink
                    className="footer__link"
                    to="https://praktikum.yandex.ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Яндекс.Практикум
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink
                    className="footer__link"
                    to="https://github.com/EvgeniiHvatov"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </footer>
        }
      ></Route>
    </Routes>
  );
}

export default Footer;
