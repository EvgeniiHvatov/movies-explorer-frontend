import './Portfolio.css';
import { NavLink } from 'react-router-dom';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className="portfolio main__portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <NavLink
            className="portfolio__link"
            to="https://github.com/EvgeniiHvatov/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__subtitle">Статичный сайт</p>
            <img
              className="portfolio__picture"
              src={arrow}
              alt="Ссылка на проект со статичным сайтом"
            />
          </NavLink>
        </li>
        <li className="portfolio__project">
          <NavLink
            className="portfolio__link"
            to="https://evgeniihvatov.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__subtitle">Адаптивный сайт</p>
            <img
              className="portfolio__picture"
              src={arrow}
              alt="Ссылка на проект с адаптивным сайтом"
            />
          </NavLink>
        </li>
        <li className="portfolio__project">
          <NavLink
            className="portfolio__link"
            to="https://evgeniihvatov.github.io/react-mesto-auth/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__subtitle">Одностраничное приложение</p>
            <img
              className="portfolio__picture"
              src={arrow}
              alt="Ссылка на проект с одностраничным приложением"
            />
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
